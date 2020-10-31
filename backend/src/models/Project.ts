import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('projects')
export default class Project {
   @PrimaryGeneratedColumn('increment')
   id: number;

   @Column()
   user_id: number;

   @Column()
   name: string;
}