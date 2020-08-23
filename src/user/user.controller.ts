import { Controller, Request, Res, Post, UseInterceptors, UploadedFiles, UseGuards, HttpStatus, HttpCode, Header, Get } from '@nestjs/common';
import { FilesInterceptor } from "@nestjs/platform-express"
import { AuthGuard } from '@nestjs/passport';
import { UserService } from './user.service';
import { User } from 'src/entities/user.entity';
import { Response } from 'express';

@Controller('user')
export class UserController {
    constructor(
        readonly userService: UserService
    ) {

    }

    @UseGuards(AuthGuard('jwt'))
    @Post('curriculum')
    @UseInterceptors(FilesInterceptor('curriculum', 1))
    async uploadFile(
        @UploadedFiles() files,
        @Request() request
    ) {
        const user: User = request.user
        const file = files[0]
        await this.userService.saveCurriculum(user, file)
        return {
            message: 'File uploaded successfully'
        }
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('curriculum')
    async downloadFile(
        @Request() request,
        @Res() response: Response
    ) {
        const user: User = request.user
        const stream = this.userService.getCurriculum(user)
        stream.pipe(response)
    }

}