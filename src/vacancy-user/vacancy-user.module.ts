import { Module } from '@nestjs/common';
import { VacancyUserService } from './vacancy-user.service';
import { VacancyUserController } from './vacancy-user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VacancyUser } from 'src/entities/vacancy-user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([VacancyUser]),
  ],
  providers: [VacancyUserService],
  controllers: [VacancyUserController],
  exports: [VacancyUserService]
})
export class VacancyUserModule {}
