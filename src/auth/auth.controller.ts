import { Controller, Body,HttpCode,HttpStatus,Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')   // base url:  /auth/
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

}
