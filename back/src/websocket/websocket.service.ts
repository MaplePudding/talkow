import {SubscribeMessage, WebSocketGateway, MessageBody, ConnectedSocket} from '@nestjs/websockets'
import { Socket } from 'socket.io';

interface MsgContent{
  sender: string,
  target: string,
  content: string
}

interface SimpleMsg {
  msgType: string,
  msgContent: MsgContent
}

const clientsObj = {}

/**
 *Clear invalid clients
 * **/

function checkClient(){
  return setInterval(() =>{
    for(const i in clientsObj){
      --clientsObj[i].lifeSec;
      if(clientsObj[i].lifeSec < 0){
        delete clientsObj[i];
      }
    }
  }, 2000);
}

function insClientSec(userName:string){
  clientsObj[userName].lifeSec = 20;
}

@WebSocketGateway(8080,{namespace: 'events' })
export class WebsocketService{
  timer: any

  constructor() {
    if(!this.timer){
      this.timer = checkClient();
    }
  }

  @SubscribeMessage('sendMsg')
  handleMsg(client: Socket, data: SimpleMsg) {
    return data;
  }

  @SubscribeMessage("connection")
  handleEvent(@MessageBody() userName: string, @ConnectedSocket() client: Socket) {
    clientsObj[userName] = client;
    clientsObj[userName].lifeSec = 20;
  }

  @SubscribeMessage("disconnection")
  handleDisconnection(@MessageBody() userName: string, @ConnectedSocket() client: Socket){

  }

  @SubscribeMessage("test")
  handleTest(@MessageBody() userName: string, @ConnectedSocket() client: Socket){
    insClientSec(userName);
  }
}