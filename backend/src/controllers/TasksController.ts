import { Request, Response} from 'express';
import { getRepository } from 'typeorm';
import Task from '../models/Task';

export default {
   async index(request: Request, response: Response){
      const { project_id } = request.query;

      const tasksRepository = getRepository(Task);

      const tasks = await tasksRepository.find({
         where: {
            project_id: project_id,
         }
      });

      return response.json(tasks);
   },

   async show(request: Request, response: Response){
      const { id } = request.params;

      const tasksRepository = getRepository(Task);

      const task = await tasksRepository.findOneOrFail(id);

      return response.json(task);
   },

   // async update(request: Request, response: Response){
   //    const { id } = request.params;

   //    const tasksRepository = getRepository(Task);

   //    const tasks = await tasksRepository.update();

   //    return response.json(tasks);
   // },

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
   }
};