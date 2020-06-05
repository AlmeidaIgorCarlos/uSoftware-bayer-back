import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Vacancy } from "./vacancy.entity";

@Entity('users')
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    email: string

    @Column()
    password: string

    @Column()
    role: string

    @Column()
    createdAt: Date

    @Column()
    updatedAt: Date

    @OneToMany(type => Vacancy, vacancy => vacancy.user)
    vacancies: Vacancy[]
}
