import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { VacancyUser } from 'src/entities/vacancy-user.entity';
import { Repository } from 'typeorm';
import { InVacancyUserDto } from 'src/dto/in-vacancy-user.dto';

@Injectable()
export class VacancyUserService {
    constructor(
        @InjectRepository(VacancyUser)
        private readonly vacancyUserRepository: Repository<VacancyUser>
    ) {

    }


    findAll(userId: number) {
        return this.vacancyUserRepository.find({
            relations: ['user', 'vacancy'],
            where: { userId: userId }
        })
    }

    create(vacancyUser: InVacancyUserDto, userId: number) {
        const vacancyUserToSave = {
            vacancy: {id:vacancyUser.vacancyId},
            user: {id:userId}
        }

        return this.vacancyUserRepository.save(vacancyUserToSave)
    }

    delete(id: number){
        return this.vacancyUserRepository.delete(id)
    }
}
