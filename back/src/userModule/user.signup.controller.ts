import { Body, Controller, Param, Post, Query } from '@nestjs/common';
import {UserSignupService, UserMdl} from './user.signupService';

@Controller()
export class UserSignupController{
  constructor(private readonly userSignupService: UserSignupService) {}

  @Post('signup')
  async signup(@Body() reqBody: UserMdl){
    return await this.userSignupService.createUser(reqBody)
  }
}