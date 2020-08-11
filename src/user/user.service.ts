import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import {InUserDto} from '../dto/in-user.dto'
    
@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        readonly userRepository: Repository<User>
    ) { }

    getUserByEmail(email: string): Promise<User> {
        return this.userRepository.findOne({
            relations: ['vacancies'],
            where: { email }
        })
    }

    saveUser(user: InUserDto){
        const userToSave = {
            ...user,
            createdAt: new Date(),
            updatedAt: new Date(),
            role: 'user'
        }

        return this.userRepository.save(userToSave)
    }

}
