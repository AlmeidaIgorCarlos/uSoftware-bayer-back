import { Entity, PrimaryGeneratedColumn, OneToOne, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { User } from "./user.entity";
import { Vacancy } from "./vacancy.entity";

@Entity('applyers')
export class Applyer{
    @PrimaryGeneratedColumn()
    id: number

    @OneToOne(type => User, user => user.applyer)
    @JoinColumn()
    user: User

    @ManyToOne(type => Vacancy, vacancy => vacancy.applyers)
    vacancy: Vacancy[]
}