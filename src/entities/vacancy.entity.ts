import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./user.entity";

@Entity('vacancies')
export class Vacancy {

    @PrimaryGeneratedColumn()
    id: string

    @Column()
    title: string

    @Column()
    description: string

    @Column()
    is_avaiable: boolean
    
    @Column()
    createdAt: Date

    @Column()
    updatedAt: Date

    @ManyToOne(type => User, user => user.vacancies)
    user: User

}