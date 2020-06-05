import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserModule } from './user/user.module';
import ormConfig from 'ormconfig'
import { User } from './entities/user.entity';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config'
import { VacancyModule } from './vacancy/vacancy.module';
import { Vacancy } from './entities/vacancy.entity';
import { VacancyUserModule } from './vacancy-user/vacancy-user.module';
import { VacancyUser } from './entities/vacancy-user.entity';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    TypeOrmModule.forRoot(ormConfig),
    TypeOrmModule.forFeature([User, Vacancy, VacancyUser]),
    UserModule,
    AuthModule,
    VacancyModule,
    VacancyUserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
