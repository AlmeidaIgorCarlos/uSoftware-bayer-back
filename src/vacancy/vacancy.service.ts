import { Injectable } from '@nestjs/common';
import { Vacancy } from 'src/entities/vacancy.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { InVacancyDto } from 'src/dto/in-vacancy.dto';
import { InVacancyUpdateDto } from 'src/dto/in-vacancy-update';
import { Applyer } from 'src/entities/applyer.entity';
import { ApplyerService } from 'src/applyer/applyer.service';
import { UserService } from 'src/user/user.service';
import { User } from 'src/entities/user.entity';

@Injectable()
export class VacancyService {
    constructor(
        @InjectRepository(Vacancy)
        readonly vacancyRepository: Repository<Vacancy>,
        
        @InjectRepository(User)
        readonly userRepository: Repository<User>,
        
        @InjectRepository(Applyer)
        readonly applyerRepository: Repository<Applyer>
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

    async subscribeInVacancy(vacancyToSubscribe: Vacancy, userWhoWantsToSubscribe: User) {
        const user = await this.userRepository.findOneOrFail(userWhoWantsToSubscribe.id)
        const vacancy = await this.vacancyRepository.findOneOrFail(vacancyToSubscribe)
        
        const applyer: Applyer = new Applyer({
            user,
            vacancy,
            isHired: false
        })

        return await this.applyerRepository.save(applyer)
    }

    async unsubscribeFromVacancy(vacancyToUnsubscribe: Vacancy, userWhoWantsToUnsubscribe: User) {
        const user = await this.userRepository.findOneOrFail(userWhoWantsToUnsubscribe.id)
        const vacancy = await this.vacancyRepository.findOneOrFail(vacancyToUnsubscribe)

        const applyers = await this.applyerRepository.find({
            where:{
                user, vacancy
            },
            relations: ['user', 'vacancy']
        })
        console.log(applyers)
        return await this.applyerRepository.remove(applyers)
    }
}