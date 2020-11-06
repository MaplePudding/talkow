import { Controller, Get, Query } from '@nestjs/common';
import {SearchService} from './search.service';
import { LoginMdl } from '../userModule/user.loginService';

@Controller('search')
export class SearchController{
  constructor(private readonly searchService: SearchService) {}

  @Get()
  async searchUser(@Query() reqBody){
    return await this.searchService.getSearchList(reqBody.userName, reqBody.searchContent);
  }
}