import { Module } from '@nestjs/common';
import { VacancyService } from './vacancy.service';
import { VacancyController } from './vacancy.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vacancy } from 'src/entities/vacancy.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Vacancy]),
  ],
  providers: [
    VacancyService
  ],
  controllers: [VacancyController],
  exports: [VacancyService]
})
export class VacancyModule {}
