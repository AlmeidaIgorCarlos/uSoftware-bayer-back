import { Controller, Post, Body, UseGuards, Request, Get, BadRequestException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { InUserDto } from 'src/dto/in-user.dto';

@Controller('auth')
export class AuthController {
    constructor(
        readonly authService: AuthService
    ) { }

    @UseGuards(AuthGuard('local'))
    @Post('/signin')
    async signin(@Request() req) {
        return this.authService.signIn(req.user)
    }

    @Post('/signup')
    async signup(@Body() inUserDto: InUserDto) {
        try {
            const user = await this.authService.signUp(inUserDto)
            return {id: user.id}
            
        } catch (error) {
            if(error.message === 'USER_ALREADY_EXITS')
                throw new BadRequestException('User already exists')

            throw error
        }
    }

}