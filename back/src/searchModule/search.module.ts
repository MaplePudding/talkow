import { Module } from '@nestjs/common';
import {SearchController} from './search.controller';
import {SearchService} from './search.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../userModule/user.entity';

@Module({
  imports:[TypeOrmModule.forFeature([UserEntity])],
  controllers: [SearchController],
  providers: [SearchService]
})
export class SearchModule{}