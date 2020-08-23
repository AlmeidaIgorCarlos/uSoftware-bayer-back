import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { InUserDto } from '../dto/in-user.dto'
import { writeFile, createReadStream } from 'fs'
import {resolve} from 'path'

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        readonly userRepository: Repository<User>
    ) { }

    getUserByEmail(email: string): Promise<User> {
        return this.userRepository.findOne({
            // relations: ['vacancies'],
            where: { email }
        })
    }

    saveUser(user: InUserDto) {
        const userToSave = {
            ...user,
            createdAt: new Date(),
            updatedAt: new Date()
        }

        return this.userRepository.save(userToSave)
    }

    getById(id: number) {
        return this.userRepository.findOneOrFail(id)
    }

    saveCurriculum(user: User, curriculum) {
        const fileName = resolve(`./files/${user.id}-${user.firstName}-${user.lastName}.pdf`)
        return new Promise((resolve, reject) => {
            writeFile(fileName, curriculum.buffer, (err) => {
                if (err)
                    reject(err)
                else resolve()
            })
        })
    }

    getCurriculum(user: User) {
        const fileName = resolve(`./files/${user.id}-${user.firstName}-${user.lastName}.pdf`)
        return createReadStream(fileName)
    }

}
