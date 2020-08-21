import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Applyer } from 'src/entities/applyer.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Vacancy } from 'src/entities/vacancy.entity';

@Injectable()
export class ApplyerService {
    constructor(
        @InjectRepository(Applyer)
        readonly applyerRepository: Repository<Applyer>
    ) {

    }

    save(applyer: Applyer) {
        return this.applyerRepository.save(applyer)
    }

    getByUserAndVacancy(user: User, vacancy: Vacancy) {
        return this.applyerRepository.find({
            where: {
                user, vacancy
            }
        })
    }

    remove(applyers: Applyer[]) {
        return this.applyerRepository.remove(applyers)
    }

    async hireApplyer(id: number) {
        const applyer = await this.applyerRepository.findOneOrFail(id)

        if (applyer.isHired)
            return applyer

        applyer.isHired = true
        return this.applyerRepository.save(applyer)
    }

}