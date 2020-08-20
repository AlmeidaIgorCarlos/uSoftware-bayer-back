import { MigrationInterface, QueryRunner } from "typeorm";
import { Vacancy } from "src/entities/vacancy.entity";
import { User } from "src/entities/user.entity";
import { Applyer } from "src/entities/applyer.entity";

export class SeedApplyerMigration1597889580486 implements MigrationInterface {
    name = 'SeedApplyerMigration1597889580486'

    public async up(queryRunner: QueryRunner): Promise<void> {

        const users: User[] = await queryRunner.manager
            .getRepository(User)
            .find({
                role: 'user'
            })

        const vacancies: Vacancy[] = await queryRunner.manager
            .getRepository(Vacancy)
            .find()

        const applyers: any = vacancies.map((vacancy: Vacancy, index) => {
            return {
                id: ++index,
                user: users[0],
                vacancy: vacancy
            }
        })
        
        await queryRunner.manager
            .getRepository(Applyer)
            .insert(applyers)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}