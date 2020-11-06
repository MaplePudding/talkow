import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule} from './userModule/user.module';
import { FriendModule} from './friendModule/friend.module';
import { UserEntity } from './userModule/user.entity';
import { WebsocketModule} from './websocket/websocket.module';
import { SearchModule } from './searchModule/search.module';
import { NoticeModule } from './noticeModule/notice.module';
import { AddFriendModule } from './addFriendModule/addFriend.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'test',
      synchronize: true,
      entities:[UserEntity]
    }),
    UserModule,
    FriendModule,
    WebsocketModule,
    SearchModule,
    NoticeModule,
    AddFriendModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
