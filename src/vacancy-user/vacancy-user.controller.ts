import { Controller, Post, Req, Param, Request, Body, UseGuards, Get, Delete } from '@nestjs/common';
import { VacancyUserService } from './vacancy-user.service';
import { InVacancyUserDto } from 'src/dto/in-vacancy-user.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('vacancy-user')
export class VacancyUserController {
    constructor(
        private readonly vacancyUserService: VacancyUserService
    ) {

    }

    @Get('')
    @UseGuards(AuthGuard('jwt'))
    async getVacancyUser(
        @Request() req,
    ) {
        try {
            return await this.vacancyUserService.findAll(req.user.id)
        } catch (error) {
            throw error
        }
    }

    @Post('')
    @UseGuards(AuthGuard('jwt'))
    async postVacancyUser(
        @Req() req,
        @Body() body: InVacancyUserDto
    ) {
        try {
            return await this.vacancyUserService.create(body, req.user.id)
        } catch (error) {
            throw error
        }
    }

    @Delete(':id')
    @UseGuards(AuthGuard('jwt'))
    async deleteVacancyUser(
        @Req() req,
        @Param('id') id: number
    ) {
        try {
            return await this.vacancyUserService.delete(id)
        } catch (error) {
            throw error
        }
    }

}