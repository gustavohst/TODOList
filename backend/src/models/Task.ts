import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tasks')
export default class Task {
   @PrimaryGeneratedColumn('increment')
   id: number;

   @Column()
   project_id: number;

   @Column()
   description: string;

   @Column()
   status: number;

   @Column()
   creation_date: Date;

   @Column()
   finish_date: Date;
}