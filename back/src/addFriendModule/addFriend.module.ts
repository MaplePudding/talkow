import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../userModule/user.entity';
import { AddFriendController } from './addFriend.controller';
import { AddFriendService } from './addFriend.service';
import { NoticeService } from '../noticeModule/notice.service';

@Module({
  imports:[TypeOrmModule.forFeature([UserEntity])],
  controllers:[AddFriendController],
  providers:[AddFriendService, NoticeService]
})
export class AddFriendModule{}