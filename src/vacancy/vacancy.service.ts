import { Injectable } from '@nestjs/common';
import { Vacancy } from 'src/entities/vacancy.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { InVacancyDto } from 'src/dto/in-vacancy.dto';
import { InVacancyUpdateDto } from 'src/dto/in-vacancy-update';
import { Applyer } from 'src/entities/applyer.entity';
import { ApplyerService } from 'src/applyer/applyer.service';
import { UserService } from 'src/user/user.service';

@Injectable()
export class VacancyService {
    constructor(
        @InjectRepository(Vacancy)
        readonly vacancyRepository: Repository<Vacancy>,
        readonly userService: UserService,
        readonly applyerService: ApplyerService
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

    async subscribeInVacancy(vacancyId: number, userId: number) {
        const user = await this.userService.getById(userId)
        const vacancy = await this.vacancyRepository.findOneOrFail(vacancyId)

        const applyer: Applyer = new Applyer()
        applyer.user = user
        applyer.vacancy = vacancy
        applyer.isHired = false

        const newApplyer = await this.applyerService.save(applyer)
        return newApplyer
    }

    async unsubscribeFromVacancy(vacancyId: number, userId: number) {
        const user = await this.userService.getById(userId)
        const vacancy = await this.vacancyRepository.findOneOrFail(vacancyId)

        const applyers = await this.applyerService.getByUserAndVacancy(user, vacancy)

        const removedApplyer = await this.applyerService.remove(applyers)
        return removedApplyer
    }
}