import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { User } from "./user.entity";
import { Applyer } from "./applyer.entity";

@Entity('vacancies')
export class Vacancy {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    description: string

    @Column()
    isAvaiable: boolean
    
    @Column()
    createdAt: Date

    @Column()
    updatedAt: Date

    @ManyToOne(type => User, user => user.vacancies)
    user: User

    @OneToMany(type => Applyer, applyer => applyer.vacancy)
    applyers: Applyer[]
}