import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserModule } from './user/user.module';
import ormConfig from '../ormconfig'
import { User } from './entities/user.entity';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    TypeOrmModule.forRoot(ormConfig),
    TypeOrmModule.forFeature([User]),
    UserModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
