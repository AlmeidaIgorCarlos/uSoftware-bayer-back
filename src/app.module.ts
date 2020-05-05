import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm'
import { UserModule } from './user/user.module';
import ormConfig from '../ormconfig'
import { user } from './entities/user';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormConfig),
    TypeOrmModule.forFeature([user]),
    UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
