import {Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne} from "typeorm";
import { Vacancy } from "./vacancy.entity";
import { Applyer } from "./applyer.entity";

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

    @OneToOne(type => Applyer, applyer => applyer.user)
    applyer: Applyer
}
