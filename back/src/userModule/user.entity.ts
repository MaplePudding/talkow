import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({length: 20})
  userName: string;

  @Column({length: 20})
  pwd: string;

  @Column({length: 20})
  email: string;
}
