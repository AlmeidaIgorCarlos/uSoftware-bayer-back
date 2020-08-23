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

    async hire(applyerToHire: Applyer) {
        const applyer:Applyer = await this.applyerRepository.findOneOrFail(applyerToHire)

        if (applyer.isHired)
            return applyer

        applyer.hire()
        return this.applyerRepository.save(applyer)
    }

    async fire(applyerToFire: Applyer) {
        const applyer:Applyer = await this.applyerRepository.findOneOrFail(applyerToFire)

        if (!applyer.isHired)
            return applyer

        applyer.fire()
        return this.applyerRepository.save(applyer)
    }

}