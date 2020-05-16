import { Controller, Get, Request, UseGuards, SetMetadata, Query } from '@nestjs/common';
import { VacancyService } from './vacancy.service';
import { JwtStrategy } from 'src/auth/strategies/jwt.strategy';
import { AuthGuard } from '@nestjs/passport';

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
        const vacancies = await this.vacancyService.findAll(user.id, {
            is_avaiable: is_avaiable === 'true' ? true : false
        })
        
        return vacancies
    }
}