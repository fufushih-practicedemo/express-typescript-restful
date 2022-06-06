import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TblPost {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text',{nullable:false, unique:true})
  title: string;

  @Column('text',{nullable:false, unique:true})
  author: string;

  @Column('text',{nullable:false, unique:true})
  descript: string;
}