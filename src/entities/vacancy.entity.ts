import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

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
    user_id: boolean
}