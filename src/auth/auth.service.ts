import { ConflictException, Injectable, UnauthorizedException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import {JwtService} from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private prisma : PrismaService,
    private jwtService : JwtService,
  ){}
  
  async generateTokens(userId:string,email:string){
    const[accessToken,refreshToken] = await Promise.all([
      this.jwtService.signAsync(
        {sub:userId,email},{secret:process.env.JWT_SECRET, expiresIn: '10m'}
      ),this.jwtService.signAsync(
        {sub:userId,email},{secret:process.env.JWT_REFRESH_SECRET,expiresIn:'7d'}
      ),
    ]);
    return {access_token:accessToken,refresh_token:refreshToken};
  }

  async updateRefreshToken(userId:string, refreshToken:string){
    const hashed = await bcrypt.hash(refreshToken,10);
    await this.prisma.user.update({
      where:{id:userId},
      data:{hashedRefreshToken:hashed},
    });
  }



  async register(dto: RegisterDto){
    const existingUser = await this.prisma.user.findUnique(
      {where:{email:dto.email},}
    );
    if(existingUser){
      throw new ConflictException('Email is alreay registered');
    }
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(dto.password,saltRounds);
    const user = await this.prisma.user.create({
      data:{
        name:dto.name,
        email:dto.email,
        password:hashedPassword,
      },
    });
    // const {password,...others} = user;
    // return others;
    const tokens = await this.generateTokens(user.id, user.email);
    await this.updateRefreshToken(user.id, tokens.refresh_token);
    return tokens;
  }  

  async login(dto:LoginDto){
    //have to find user
    const user = await this.prisma.user.findUnique({
      where:{email:dto.email},
    });
    if(!user){
      throw new UnauthorizedException('Invalid Credentials');
    }
    const isPasswordValid = await bcrypt.compare(dto.password,user.password);
    if(!isPasswordValid){
      throw new UnauthorizedException('Invalid Credentials');
    }
    // const accessToken = this.jwtService.sign({sub:user.id,email:user.email});
    // return {
    //   access_token : accessToken,
    // };
    const tokens = await this.generateTokens(user.id, user.email);
    await this.updateRefreshToken(user.id, tokens.refresh_token);
    return tokens;
  }
  async refreshTokens(userId:string,refreshToken:string){
  const user = await this.prisma.user.findUnique({ where: { id: userId } });
  if (!user || !user.hashedRefreshToken) throw new ForbiddenException('Access Denied');
  const matches = await bcrypt.compare(refreshToken,user.hashedRefreshToken);
  if(!matches) throw new ForbiddenException('Access Denied');
  const tokens = await this.generateTokens(user.id, user.email);
  await this.updateRefreshToken(user.id, tokens.refresh_token);
  return tokens;
  }
}
