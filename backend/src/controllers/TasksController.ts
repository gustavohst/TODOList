import { Request, Response} from 'express';
import { getRepository } from 'typeorm';
import Task from '../models/Task';

export default {
    async getall(request: Request, response: Response){
      const tasksRepository = getRepository(Task);

      const tasks = await tasksRepository.find();

      return response.json(tasks);
   },

   async show(request: Request, response: Response){
      const { id } = request.params;

      const tasksRepository = getRepository(Task);

      const task = await tasksRepository.findOneOrFail(id);

      return response.json(task);
   },

   async update(request: Request, response: Response){
      const { id } = request.params;

      const tasksRepository = getRepository(Task);

      const task = await tasksRepository.findOneOrFail(id);
      task.status = 1;
      task.finish_date = new Date();

      tasksRepository.save(task);

      return response.json(task);
   },

   async create(request: Request, response: Response){
      const {
         project_id,
         description,
         status,
         creation_date,
      } = request.body
   
      const tasksRepository = getRepository(Task);
      const task = tasksRepository.create({
         project_id,
         description,
         status,
         creation_date,
      });
   
      await tasksRepository.save(task);
      return response.status(201).json(task);
   },

   async delete(request: Request, response: Response){
      const { id } = request.params;

      const tasksRepository = getRepository(Task);

      const task = await tasksRepository.findOneOrFail(id);

      tasksRepository.remove(task);

      return response.json(task);
   },
};