import { Controller, Get, Request, UseGuards, SetMetadata, Query, Body, Post, Put, Param } from '@nestjs/common';
import { VacancyService } from './vacancy.service';
import { JwtStrategy } from 'src/auth/strategies/jwt.strategy';
import { AuthGuard } from '@nestjs/passport';
import { InVacancyDto } from 'src/dto/in-vacancy.dto';
import { InVacancyUpdateDto } from 'src/dto/in-vacancy-update';

@Controller('vacancies')
export class VacancyController {
    constructor(
        readonly vacancyService: VacancyService
    ) { }

    @UseGuards(AuthGuard('jwt'))
    @Get('')
    async getVacancies(
        @Request() req,
        @Query('is_avaiable') is_avaiable: string
    ) {
        const user = req.user
        const query = is_avaiable ? {
            is_avaiable: is_avaiable === 'true' ? true : false
        } : {}
        const vacancies = await this.vacancyService.findAll(user.id, query)

        return vacancies
    }

    @UseGuards(AuthGuard('jwt'))
    @Post('')
    async saveVacancy(
        @Request() req,
        @Body() body: InVacancyDto
    ) {
        const user = req.user
        const newVacancy = await this.vacancyService.create(body, user.id)

        return newVacancy
    }

    @UseGuards(AuthGuard('jwt'))
    @Put(':id')
    async updateVacancy(
        @Request() req,
        @Body() body: InVacancyUpdateDto,
        @Param('id') id: number
    ) {
        const newVacancy = await this.vacancyService.update(id, body)

        return newVacancy
    }
}