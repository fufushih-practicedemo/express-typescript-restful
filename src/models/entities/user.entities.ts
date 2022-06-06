import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TblUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text',{nullable:false, unique:true})
  name: string;

  @Column('text',{nullable:false, unique:true})
  email: string;

  @Column('text', {nullable:false})
  password: string;
}