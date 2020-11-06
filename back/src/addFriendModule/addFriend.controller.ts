import { Controller, Get, Query } from '@nestjs/common';
import {AddFriendService} from './addFriend.service';

@Controller('addFriend')
export class AddFriendController{
  constructor(private readonly addFriendService: AddFriendService) {}
  @Get()
  async addFriend(@Query() reqBody){
    return await this.addFriendService.addFriend(reqBody.userName, reqBody.targetName);
  }
}