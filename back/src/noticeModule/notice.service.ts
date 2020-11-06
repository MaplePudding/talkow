import {Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../userModule/user.entity';
import { Repository } from 'typeorm';

interface NoticeItem{
  userName: string,
  date: string
}

@Injectable()
export class NoticeService{
  constructor(@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>) {}

  async getNoticeList(userName:string){
    const notice = await this.userRepository.query(`select notice from user_entity where userName=${userName}`);
    return await notice.split("*");
  }

  async addNoticeItem(userName:string, noticeItem:NoticeItem){
    let notice = await this.getNoticeList(noticeItem.userName);

    for(const i in notice){
      if(JSON.parse(notice[i]).userName === noticeItem.userName){
        return false;
      }
    }

    notice.push(noticeItem)
    notice = notice.join('*');
    await this.userRepository.query(`update user_entity set notice=${notice} where userName=${userName}`)
  }

  async deleteNoticeItem(userName:string, noticeItem:NoticeItem){
    let notice = await this.getNoticeList(noticeItem.userName);

    for(let i = notice.length - 1; i >= 0; --i){
      if(JSON.parse(notice[i]).userName === noticeItem.userName){
        notice.splice(i, 1);
      }
    }

    notice = notice.join('*');
    await this.userRepository.query(`update user_entity set notice=${notice} where userName=${userName}`)
  }
}