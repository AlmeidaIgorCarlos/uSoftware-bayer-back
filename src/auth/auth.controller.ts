import { Controller, Post, Body, UseGuards, Request, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
    constructor(
        readonly authService: AuthService
    ) { }

    @UseGuards(AuthGuard('local'))
    @Post('/signin')
    async signin(@Request() req) {
        return this.authService.signin(req.user)
    }

}