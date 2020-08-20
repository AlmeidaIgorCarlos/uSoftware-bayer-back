import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Applyer } from 'src/entities/applyer.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ApplyerService {
    constructor(
        @InjectRepository(Applyer)
        readonly applyRepository: Repository<Applyer>
    ) {

    }

    getApplyers() {
        return this.applyRepository.find({
            relations: ['vacancy', 'user'],
        }
        )
    }
}
