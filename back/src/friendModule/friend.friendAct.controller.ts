import {Query, Controller, Get} from '@nestjs/common'
import {FriendActService} from './friend.friendAct.service'

interface FriendsListReqBody{
  userName: string
}

@Controller()
export class FriendsListController{
  constructor(private readonly friendActService: FriendActService) {}

  @Get('friendsList')
  async getFriendsList(@Query() reqBody: FriendsListReqBody){
    return await this.friendActService.getFriendsList(reqBody.userName);
  }
}