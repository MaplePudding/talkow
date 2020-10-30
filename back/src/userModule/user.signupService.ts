import {UserEntity} from './user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

export interface UserMdl{
  userName: string,
  pwd: string,
  email: string
}

@Injectable()
export class UserSignupService{
  constructor(@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>) {}

  /**
   * Create a new user
   **/

  async createUser(userMdl: UserMdl){
    const queryRes = await this.userRepository.query(`select * from user_entity where userName=${userMdl.userName}`)
    if(queryRes.length !== 0){
      return false
    }else{
      await this.userRepository.save(userMdl);
      return true;
    }
  }
}
