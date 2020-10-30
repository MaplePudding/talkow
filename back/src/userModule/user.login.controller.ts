import { Controller, Get, Param, Query, Req } from '@nestjs/common';
import { UserLoginService, LoginMdl} from './user.loginService';


@Controller()
export class UserLoginController{
  constructor(private readonly userLoginService: UserLoginService) {}

  @Get('login')
  async login(@Query() reqBody: LoginMdl){
    return await this.userLoginService.checkLoginData(reqBody);
  }
}