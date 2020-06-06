import { Controller, Get, Request, UseGuards, Query, Body, Post, Put, Param, Delete } from '@nestjs/common';
import { VacancyService } from './vacancy.service';
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
        @Query('isAvaiable') isAvaiable: string
    ) {
        const user = req.user
        const query = isAvaiable ? {
            isAvaiable: isAvaiable === 'true' ? true : false
        } : {}
        const vacancies = await this.vacancyService.findAll(user.id, query)

        return vacancies
    }

    @UseGuards(AuthGuard('jwt'))
    @Get(':id')
    async getVacancy(
        @Request() req,
        @Param('id') id: number
    ) {
        const user = req.user
        const query = { id }
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

    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    async deleteVacancy(
        @Request() req,
        @Param('id') id: number
    ) {
        const newVacancy = await this.vacancyService.delete(id)

        return newVacancy
    }
}