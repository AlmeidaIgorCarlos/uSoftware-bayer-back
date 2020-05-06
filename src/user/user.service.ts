import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { user } from '../user/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(user)
        readonly userRepository: Repository<user>
    ) { }

    getUserByEmail(email: string) {
        return this.userRepository.findOne({
            where: { email }
        })
    }

}
