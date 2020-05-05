import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm'
import { UserModule } from './user/user.module';
import ormConfig from '../ormconfig'

@Module({
  imports: [
    TypeOrmModule.forRoot(ormConfig),
    UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
