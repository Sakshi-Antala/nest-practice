import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Module({
  imports:[UserModule],
  providers: [AuthService,JwtService],
  controllers: [AuthController],
  exports:[JwtService]
})
export class AuthModule {}
