import { Module } from '@nestjs/common';
import {WebsocketService} from './websocket.service';

@Module({
  imports:[],
  controllers:[],
  providers: [WebsocketService],
})
export class WebsocketModule{}