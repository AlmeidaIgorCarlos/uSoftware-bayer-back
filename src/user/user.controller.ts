import { Controller, Request, Post, UseInterceptors, UploadedFiles, UseGuards } from '@nestjs/common';
import { FilesInterceptor } from "@nestjs/platform-express"
import { AuthGuard } from '@nestjs/passport';
import { UserService } from './user.service';
import { User } from 'src/entities/user.entity';

@Controller('user')
export class UserController {
    constructor(
        readonly userService: UserService
    ){

    }

    @UseGuards(AuthGuard('jwt'))
    @Post('upload')
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

}
