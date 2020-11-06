import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../userModule/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SearchService{
  constructor(@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>) {}

  async getSearchList(userName:string, searchContent:string){
    const targetList = await this.userRepository.query(`select userName from user_entity where userName like "%${searchContent}%" and userName != ${userName}`);
    const friendList = await this.getUserFriendList(userName);
    return await this.removeListItem(userName, targetList, friendList);
  }

  async getUserFriendList(userName){
    const friendList = await this.userRepository.query(`select friends from user_entity where userName = ${userName}`);
    return friendList[0].friends.split(" ");
  }

  async removeListItem(userName:string, targetList, friendList){
    for(const i in friendList){
      const index = targetList.indexOf(friendList[i]);
      if(index !== -1){
        targetList.splice(index, 1);
      }
    }
    return targetList;
  }
}