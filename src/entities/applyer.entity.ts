import { Entity, PrimaryGeneratedColumn, OneToOne, OneToMany, ManyToOne, JoinColumn, Column } from "typeorm";
import { User } from "./user.entity";
import { Vacancy } from "./vacancy.entity";
import { IsBoolean } from "class-validator";

@Entity('applyers')
export class Applyer {
    @PrimaryGeneratedColumn()
    id: number

    @OneToOne(type => User, user => user.applyer)
    @JoinColumn()
    user: User

    @Column()
    @IsBoolean()
    isHired: boolean

    @ManyToOne(type => Vacancy, vacancy => vacancy.applyers)
    vacancy: Vacancy

    hire() {
        this.isHired = true
        return this
    }
}