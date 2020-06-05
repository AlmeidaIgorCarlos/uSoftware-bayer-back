import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class VacancyUser1591315167102 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(new Table({
            name: 'vacancy_user',
            columns: [
                {
                    name: 'id',
                    type: 'serial',
                    isPrimary: true
                },
                {
                    name: 'userId',
                    type: 'int',
                    isPrimary: false
                },
                {
                    name: 'vacancyId',
                    type: 'int',
                    isPrimary: false
                },
            ]
        }))

        await queryRunner.createForeignKeys('vacancy_user', [
            new TableForeignKey({
                columnNames: ["userId"],
                referencedColumnNames: ["id"],
                referencedTableName: "users",
                onDelete: "CASCADE"
            }),
            new TableForeignKey({
                columnNames: ["vacancyId"],
                referencedColumnNames: ["id"],
                referencedTableName: "vacancies",
                onDelete: "CASCADE"
            }),
        ])
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
