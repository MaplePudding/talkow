import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../userModule/user.entity';
import { FriendsListController} from './friend.friendAct.controller';
import { FriendActService} from './friend.friendAct.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [FriendsListController],
  providers: [FriendActService]
})
export class FriendModule{}