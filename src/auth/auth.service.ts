import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(
        readonly userService: UserService
    ){}
    async authenticate(email: string, password: string){
        const user = await this.userService.getUserByEmail(email)
        
        if(!user)
            throw new Error('NOT_FOUND')

        if(user.password != password)
            throw new Error('WRONG_PASSWORD')

        return user
    }
}
