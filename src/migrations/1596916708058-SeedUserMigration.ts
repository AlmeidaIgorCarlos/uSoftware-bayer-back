import {MigrationInterface, QueryRunner} from "typeorm";

export class SeedUserMigration1596916708058 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        const users = [
            {
                firstName: 'Igor',
                lastName: 'Administrator',
                email: 'administrator@gmail.com',
                password: '123',
                role: 'administrator',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                firstName: 'Igor',
                lastName: 'User',
                email: 'user@gmail.com',
                password: '123',
                role: 'user',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]

        await queryRunner.manager.createQueryBuilder()
            .insert()
            .into('users')
            .values(users)
            .execute()
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
