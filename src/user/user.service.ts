import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { user } from '../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import {InUserDto} from '../dto/in-user.dto'

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(user)
        readonly userRepository: Repository<user>
    ) { }

    getUserByEmail(email: string): Promise<user> {
        return this.userRepository.findOne({
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
