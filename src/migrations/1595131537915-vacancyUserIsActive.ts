import { MigrationInterface, QueryRunner, Column, TableColumn } from "typeorm";

export class vacancyUserIsActive1595131537915 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.addColumn('vacancy_user', new TableColumn({
            name: 'isActive',
            type: 'boolean'
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
