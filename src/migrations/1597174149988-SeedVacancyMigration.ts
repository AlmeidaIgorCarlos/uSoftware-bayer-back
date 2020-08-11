import { MigrationInterface, QueryRunner } from "typeorm";
import { User } from "src/entities/user.entity";
import { Vacancy } from "src/entities/vacancy.entity";

export class SeedVacancyMigration1597174149988 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const users: User[] = await queryRunner.manager
            .getRepository(User)
            .find()

        users.forEach(async user => {
            await queryRunner.manager
                .getRepository('vacancies')
                .insert([
                    {
                    title: 'First Job Opportunity',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non tellus vel erat sodales tincidunt. Vestibulum id libero finibus, feugiat diam eu, tristique dui. Praesent id ipsum ut nisl ornare vestibulum.',
                    isAvaiable: true,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    user
                },
                {
                    title: 'Second Job Opportunity',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non tellus vel erat sodales tincidunt. Vestibulum id libero finibus, feugiat diam eu, tristique dui. Praesent id ipsum ut nisl ornare vestibulum.',
                    isAvaiable: true,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    user
                },
                {
                    title: 'Third Job Opportunity',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non tellus vel erat sodales tincidunt. Vestibulum id libero finibus, feugiat diam eu, tristique dui. Praesent id ipsum ut nisl ornare vestibulum.',
                    isAvaiable: true,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    user
                },
                {
                    title: 'Fourth Job Opportunity',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non tellus vel erat sodales tincidunt. Vestibulum id libero finibus, feugiat diam eu, tristique dui. Praesent id ipsum ut nisl ornare vestibulum.',
                    isAvaiable: true,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    user
                },
                {
                    title: 'Fifth Job Opportunity',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non tellus vel erat sodales tincidunt. Vestibulum id libero finibus, feugiat diam eu, tristique dui. Praesent id ipsum ut nisl ornare vestibulum.',
                    isAvaiable: true,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    user
                },
                {
                    title: 'Sixth Job Opportunity',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non tellus vel erat sodales tincidunt. Vestibulum id libero finibus, feugiat diam eu, tristique dui. Praesent id ipsum ut nisl ornare vestibulum.',
                    isAvaiable: true,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    user
                },
                {
                    title: 'Seventh Job Opportunity',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non tellus vel erat sodales tincidunt. Vestibulum id libero finibus, feugiat diam eu, tristique dui. Praesent id ipsum ut nisl ornare vestibulum.',
                    isAvaiable: true,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    user
                },
                {
                    title: 'eighth Job Opportunity',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non tellus vel erat sodales tincidunt. Vestibulum id libero finibus, feugiat diam eu, tristique dui. Praesent id ipsum ut nisl ornare vestibulum.',
                    isAvaiable: true,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    user
                },
                {
                    title: 'nineth Job Opportunity',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non tellus vel erat sodales tincidunt. Vestibulum id libero finibus, feugiat diam eu, tristique dui. Praesent id ipsum ut nisl ornare vestibulum.',
                    isAvaiable: true,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    user
                },
                {
                    title: 'Tenth Job Opportunity',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non tellus vel erat sodales tincidunt. Vestibulum id libero finibus, feugiat diam eu, tristique dui. Praesent id ipsum ut nisl ornare vestibulum.',
                    isAvaiable: true,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    user
                }
            ])
        })
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
