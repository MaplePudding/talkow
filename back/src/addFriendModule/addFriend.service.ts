import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../userModule/user.entity';
import { Repository } from 'typeorm';
import { NoticeService } from '../noticeModule/notice.service';


@Injectable()
export class AddFriendService{
  constructor(
    @InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>,
    private readonly noticeService: NoticeService) {}

  async addFriend(userName:string, targetName:string){
    return await this.noticeService.addNoticeItem(userName, {userName: targetName, date: new Date().toString()})
  }
}
