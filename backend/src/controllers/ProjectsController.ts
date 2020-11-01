import { Request, Response} from 'express';
import { getRepository } from 'typeorm';
import Project from '../models/Project';

export default {
   async index(request: Request, response: Response){
      const {
         user_id,
      } = request.query;

      const projectsRepository = getRepository(Project);

      const projects = await projectsRepository.find({
         where: {
            user_id: user_id,
         }
      });

      return response.json(projects);
   },

   async create(request: Request, response: Response){
      const { user_id, name, } = request.body
   
      const projectsRepository = getRepository(Project);
      const project = projectsRepository.create({
         user_id,
         name,
      });
   
      await projectsRepository.save(project);
   
      return response.status(201).json(project);
   },

   async update(request: Request, response: Response){
      const { id } = request.params;
      const { name } = request.body;

      const projectsRepository = getRepository(Project);

      const project = await projectsRepository.findOneOrFail(id);
      project.name = name;

      projectsRepository.save(project);

      return response.json(project);
   },

   async delete(request: Request, response: Response){
      const { id } = request.params;

      const projectsRepository = getRepository(Project);

      const project = await projectsRepository.findOneOrFail(id);

      projectsRepository.delete(project);

      return response.json("project deleted");
   },

};