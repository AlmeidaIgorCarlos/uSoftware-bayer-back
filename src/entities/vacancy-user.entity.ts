import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, Column } from "typeorm";
import { User } from "./user.entity";
import { Vacancy } from "./vacancy.entity";

@Entity('vacancy_user')
export class VacancyUser {
    @PrimaryGeneratedColumn()
    id: number

    @OneToOne(type => User, user => user.id)
    @JoinColumn()
    user: User

    @OneToOne(type => Vacancy)
    @JoinColumn()
    vacancy: Vacancy

    @Column()
    isActive: boolean
}