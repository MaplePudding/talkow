import {UserEntity} from './user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

export interface LoginMdl{
  userName: string;
  pwd: string;
}

@Injectable()
export class UserLoginService{
  constructor(@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>) {}

  async checkLoginData(loginMdl:LoginMdl){
    const queryRes = await this.userRepository.query(`select * from user_entity where userName=${loginMdl.userName} and pwd=${loginMdl.pwd}`);
    return queryRes.length !== 0;
  }
}