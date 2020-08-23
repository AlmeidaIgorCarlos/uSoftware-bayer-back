import { Module } from '@nestjs/common';
import { VacancyService } from './vacancy.service';
import { VacancyController } from './vacancy.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vacancy } from 'src/entities/vacancy.entity';
import { Applyer } from 'src/entities/applyer.entity';
import { User } from 'src/entities/user.entity';
import { UserModule } from 'src/user/user.module';
import { ApplyerModule } from 'src/applyer/applyer.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Vacancy, User, Applyer]),
    UserModule,
    ApplyerModule,
    VacancyModule
  ],
  providers: [
    VacancyService
  ],
  controllers: [VacancyController],
  exports: [VacancyService]
})
export class VacancyModule {}
