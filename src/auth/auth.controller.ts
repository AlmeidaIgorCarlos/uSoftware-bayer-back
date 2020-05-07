import { Controller, Post, Body, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { user } from 'src/user/user.entity';

@Controller('auth')
export class AuthController {
    constructor(
        readonly authService: AuthService
    ){}
    
    @UseGuards(AuthGuard('local'))
    @Post('/login')
    async login(@Request() req){
        return req.user
    }
}