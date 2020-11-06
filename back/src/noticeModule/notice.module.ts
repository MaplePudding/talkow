import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../userModule/user.entity';
import {NoticeController} from './notice.controller';
import { NoticeService } from './notice.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [NoticeController],
  providers: [NoticeService]
})
export class NoticeModule{}