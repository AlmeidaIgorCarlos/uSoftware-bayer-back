import { MigrationInterface, QueryRunner, Table, TableForeignKey, TableColumn } from "typeorm";

export class ApplyerMigration1597888125187 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'applyers',
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
                }
            ]
        }))

        await queryRunner.addColumn("applyers", new TableColumn({
            name: 'vacancyId',
            type: 'int',
            isPrimary: false
        }));

        await queryRunner.createForeignKey('applyers', new TableForeignKey({
            columnNames: ["vacancyId"],
            referencedColumnNames: ["id"],
            referencedTableName: "vacancies",
            onDelete: "CASCADE"
        }))

        await queryRunner.createForeignKey('applyers', new TableForeignKey({
            columnNames: ["userId"],
            referencedColumnNames: ["id"],
            referencedTableName: "users",
            onDelete: "CASCADE"
        }))

    }

    public async down(queryRunner: QueryRunner): Promise<void> {

    }

}
