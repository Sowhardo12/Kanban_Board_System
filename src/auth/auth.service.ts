import { Injectable, ConflictException, UnauthorizedException } from '@nestjs/common';
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
  //this.prisma = new PrismaService()
  //this.jwtService = new JwtService()   nest does it
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
    const {password,...others} = user;
    return others;
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
    const accessToken = this.jwtService.sign({sub:user.id,email:user.email});
    return {
      access_token : accessToken,
    };
  }
}
