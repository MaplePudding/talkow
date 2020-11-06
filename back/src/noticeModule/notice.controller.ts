import { Controller, Get, Query } from '@nestjs/common';
import { NoticeService } from './notice.service';


@Controller('notice')
export class NoticeController{
  constructor(private readonly noticeService:NoticeService) {}

  @Get('getnotice')
  async noticeList(@Query() reqBody){
    return await this.noticeService.getNoticeList(reqBody.userName);
  }

  @Get('agree')
  async agreeNotice(@Query() reqBody){
    return await this.noticeService.addNoticeItem(reqBody.userName, {userName:reqBody.noticeName, date:new Date().toString()})
  }

  @Get('refuse')
  async refuseNotice(@Query() reqBody){
    return await this.noticeService.deleteNoticeItem(reqBody.userName, {userName:reqBody.noticeName, date:reqBody.date.toString()})
  }
}