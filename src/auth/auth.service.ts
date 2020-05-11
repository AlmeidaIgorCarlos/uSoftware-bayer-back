import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { InUserDto } from 'src/dto/in-user.dto';

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
        delete user.createdAt
        delete user.updatedAt
        return user
    }

    async signIn(user: any) {
        const payload = {...user}
        return {
            access_token: this.jwtService.sign(payload),
            ...user
        }
    }

    async signUp(inUserDto: InUserDto){
        const user = await this.userService.getUserByEmail(inUserDto.email)
        
        if(user)
            throw new Error('USER_ALREADY_EXITS')

        return await this.userService.saveUser(inUserDto)
    }
}
