import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserModule } from './user/user.module';
import { User } from './entities/user.entity';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config'
import { VacancyModule } from './vacancy/vacancy.module';
import { Vacancy } from './entities/vacancy.entity';
import { ApplyerModule } from './applyer/applyer.module';
const path = require('path')

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: 5432,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      migrationsRun: true,
      migrations: [path.resolve(__dirname + '/migrations/*.{ts,js}')],
      entities: [path.resolve(__dirname + '/entities/*.{ts,js}')]
    }),
    TypeOrmModule.forFeature([User, Vacancy]),
    UserModule,
    AuthModule,
    VacancyModule,
    ApplyerModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
