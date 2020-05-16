import { Injectable } from '@nestjs/common';
import { Vacancy } from 'src/entities/vacancy.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class VacancyService {
    constructor(
        @InjectRepository(Vacancy)
        readonly vacancyRepository: Repository<Vacancy>
    ) {

    }

    async findAll(adminId: string, query){
        return this.vacancyRepository.find({
            relations: ['user'],
            where:{
                userId: adminId,
                ...query
            }
        })
    }
}
