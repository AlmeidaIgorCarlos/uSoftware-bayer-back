import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm'
import { UserModule } from './user/user.module';
import ormConfig from '../ormconfig'
import { user } from './user/user.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormConfig),
    TypeOrmModule.forFeature([user]),
    UserModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
