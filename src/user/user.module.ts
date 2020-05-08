import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { user } from '../entities/user.entity'

@Module({
  imports: [
    TypeOrmModule.forFeature([user]),
  ],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule { }
