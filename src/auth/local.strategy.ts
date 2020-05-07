import { AuthService } from "./auth.service";
import { UnauthorizedException, Injectable } from "@nestjs/common";
import { Strategy } from 'passport-local'
import { PassportStrategy } from '@nestjs/passport'

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(
        readonly authService: AuthService
    ) { super() }

    async validate(username: string, password: string): Promise<any> {
        try {
            const user = await this.authService.authenticate(username, password)
            return user
        } catch (error) {
            console.log(error.message)
            if (error.message === 'NOT_FOUND' || error.message === 'WRONG_PASSWORD')
                throw new UnauthorizedException()
        }
    }
}