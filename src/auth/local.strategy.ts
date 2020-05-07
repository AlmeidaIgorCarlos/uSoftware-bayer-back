import { AuthService } from "./auth.service";
import { UnauthorizedException, Injectable } from "@nestjs/common";
import { Strategy } from 'passport-local'
import { PassportStrategy } from '@nestjs/passport'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(
        readonly authService: AuthService,
        readonly jwtService: JwtService
    ) { super() }

    async validate(username: string, password: string): Promise<any> {
        try {
            const user = await this.authService.authenticate(username, password)
            return user
        } catch (error) {
            if (error.message === 'NOT_FOUND' || error.message === 'WRONG_PASSWORD')
                throw new UnauthorizedException()

            throw error
        }
    }
}