import { Module } from '@nestjs/common';
import { ApplyerController } from './applyer.controller';
import { ApplyerService } from './applyer.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Applyer } from 'src/entities/applyer.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Applyer]),
  ],
  controllers: [ApplyerController],
  providers: [ApplyerService]
})
export class ApplyerModule {}
