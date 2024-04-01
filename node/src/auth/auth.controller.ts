import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserInput } from './dto/login-user-input.dto';
import { Public } from 'src/core/decorator/publicMetaData-decorator';

@Controller('auth')
export class AuthController {
constructor (
    private authService: AuthService)
  {}
  @Public()
  @Post('/login')
  async login(@Body() user: LoginUserInput) {
    return await this.authService.login(user);
  }
}
