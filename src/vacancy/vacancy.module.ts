import { Module } from '@nestjs/common';
import { VacancyService } from './vacancy.service';
import { VacancyController } from './vacancy.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vacancy } from 'src/entities/vacancy.entity';
import { ApplyerModule } from 'src/applyer/applyer.module';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Vacancy]),
    ApplyerModule,
    UserModule,
    VacancyModule
  ],
  providers: [
    VacancyService
  ],
  controllers: [VacancyController],
  exports: [VacancyService]
})
export class VacancyModule {}
