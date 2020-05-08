import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        readonly userService: UserService,
        readonly jwtService: JwtService
    ){}
    async authenticate(email: string, password: string){
        const user = await this.userService.getUserByEmail(email)
        if(!user)
            throw new Error('NOT_FOUND')

        if(user.password != password)
            throw new Error('WRONG_PASSWORD')

        delete user.password
        return user
    }

    async signin(user: any) {
        const payload = {...user}
        return {
            access_token: this.jwtService.sign(payload)
        }
    }
}
