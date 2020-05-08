import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class user {

    @PrimaryGeneratedColumn()
    id: string

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
}
