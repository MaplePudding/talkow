import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {UserEntity} from './user.entity';
import {UserSignupController} from './user.signup.controller';
import {UserLoginController} from './user.login.controller';
import {UserSignupService} from './user.signupService';
import { UserLoginService } from './user.loginService';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserSignupController, UserLoginController],
  providers:[UserSignupService, UserLoginService]
})
export class UserModule {}