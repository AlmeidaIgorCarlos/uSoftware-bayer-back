import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class VacanciesMigration1589645256212 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(
            new Table({
                name: 'vacancies',
                columns: [
                    {
                        name: 'id',
                        type: 'serial',
                        isPrimary: true
                    },
                    {
                        name: 'title',
                        type: 'varchar(255)',
                        isPrimary: false
                    },
                    {
                        name: 'description',
                        type: 'varchar(255)',
                        isPrimary: false
                    },
                    {
                        name: 'is_avaiable',
                        type: 'boolean',
                        isPrimary: false
                    },
                    {
                        name: 'user_id',
                        type: 'int',
                        isPrimary: false
                    },
                ]
            }))
            
        await queryRunner.createForeignKey('vacancies', new TableForeignKey({
            columnNames: ["user_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "users",
            onDelete: "CASCADE"
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
