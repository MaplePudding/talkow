import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../userModule/user.entity';

@Injectable()
export class FriendActService{
  constructor(@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>) {}

  /**
   * Get friendsList from MySql
   * **/

  async getFriendsList(userName:string){
    return await this.userRepository.query(`select friends from user_entity where userName=${userName}`)
  }
}