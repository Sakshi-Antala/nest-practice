import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginUserInput } from './dto/login-user-input.dto';
import { UserService } from 'src/user/user.service';
import { comparePassword } from 'src/utils/helper';
import { ResponseMsg } from 'src/responseHelper/response';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from 'src/core/jwtConstants';

@Injectable()
export class AuthService {
    constructor(private userService: UserService, private jwtService: JwtService) { }
    async login(data: LoginUserInput) {
        const user = await this.userService.findOne({
            where: { username: data.username },
        });
        if (!user) {
            return new ResponseMsg("User Not Exists", false)

        }
        const isMatchPassword = await comparePassword(data.password, user.password);

        if (!isMatchPassword) {
            return new ResponseMsg("Invalid Password", false)
        }
        const payload = { userId: user.id, username: user.username };
        const access_token = this.generateAccessToken(payload, jwtConstants.secret)
        return access_token;
    }

    async generateAccessToken(payload, secretKey) {
        const accessToken =await this.jwtService.signAsync(
            {
                userId: payload.userId,
                username: payload.username,
            },
            {
                secret: secretKey
            }
        )
        return {
            access_token: accessToken,
        };
    };
}
