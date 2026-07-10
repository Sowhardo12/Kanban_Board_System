import { Controller, Body,HttpCode,HttpStatus,Post, Req, UseGuards, ForbiddenException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { ThrottlerGuard } from '@nestjs/throttler';


@Controller('auth')   // base url:  /auth/
@UseGuards(ThrottlerGuard)   //rate limiting
export class AuthController {
  constructor(
    private readonly authService : AuthService
  ){};

  @Post('register')
  async register(@Body() dto: RegisterDto){
    return this.authService.register(dto);
  }
  @Post('login')
  @HttpCode(HttpStatus.OK)   //normally default is 201 but now 200 OK
  async login(@Body() dto: LoginDto){
    return this.authService.login(dto);
  }
  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  async refresh(@Body('refresh_token') refreshToken:string){
    try{
      const payload = await this.authService['jwtService'].verifyAsync(refreshToken,{
        secret:process.env.JWT_REFRESH_SECRET,
      });
      return this.authService.refreshTokens(payload.sub,refreshToken);
    }catch{
      throw new ForbiddenException('Invalide Refresh Token');
    }
  }
}
