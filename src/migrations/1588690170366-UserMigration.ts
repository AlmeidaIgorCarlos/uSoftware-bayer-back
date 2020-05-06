import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class UserMigration1588690170366 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(
            new Table({
                name: 'user',
                columns: [
                    {
                        name: 'id',
                        type: 'serial',
                        isPrimary: true
                    },
                    {
                        name: 'firstName',
                        type: 'varchar(255)',
                        isPrimary: false
                    },
                    {
                        name: 'lastName',
                        type: 'varchar(255)',
                        isPrimary: false
                    },
                    {
                        name: 'email',
                        type: 'varchar(255)',
                        isPrimary: false
                    },
                    {
                        name: 'password',
                        type: 'varchar(255)',
                        isPrimary: false
                    },
                    {
                        name: 'role',
                        type: 'varchar(255)',
                        isPrimary: false
                    },
                    {
                        name: 'createdAt',
                        type: 'Date',
                        isPrimary: false
                    },
                    {
                        name: 'updatedAt',
                        type: 'Date',
                        isPrimary: false
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        queryRunner.dropTable('user')
    }

}
