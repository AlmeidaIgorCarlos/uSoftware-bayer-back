import { Injectable } from '@nestjs/common';
import { Vacancy } from 'src/entities/vacancy.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { InVacancyDto } from 'src/dto/in-vacancy.dto';
import { InVacancyUpdateDto } from 'src/dto/in-vacancy-update';

@Injectable()
export class VacancyService {
    constructor(
        @InjectRepository(Vacancy)
        readonly vacancyRepository: Repository<Vacancy>
    ) {

    }

    async findAll(adminId: string, query) {
        return this.vacancyRepository.find({
            relations: ['user', 'applyers', 'applyers.user'],
            where: {
                user: {
                    id: adminId
                },
                ...query
            },
            order: {
                createdAt: "ASC"
            }
        })
    }

    async create(inVacancyDto: InVacancyDto, userId: number) {
        const newVacancy = {
            ...inVacancyDto,
            createdAt: new Date(),
            updatedAt: new Date(),
            isAvaiable: true,
            user: { id: userId }
        }

        return this.vacancyRepository.save(newVacancy)
    }

    async update(vacancyId: number, inVacancyUpdateDto: InVacancyUpdateDto) {
        const updatedVacancy = {
            ...inVacancyUpdateDto,
            updatedAt: new Date(),
        }

        return this.vacancyRepository.update(vacancyId, updatedVacancy)
    }

    async delete(vacancyId: number) {
        return this.vacancyRepository.delete(vacancyId)
    }
}
