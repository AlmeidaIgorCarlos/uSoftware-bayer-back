import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(
        readonly authService: AuthService
    ){}
    @Post('/login')
    async login(@Body() body){
        console.log(await this.authService.authenticate(body.email, body.password))
    }
}