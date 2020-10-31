
import { Router } from 'express';

import { getRepository } from 'typeorm';
import User from './models/User';
import Project from './models/Project';
import Task from './models/Task';

const routes = Router();

routes.post('/users', async (request, response) => {
   const {
      name,
      email,
      password,
   } = request.body

   const usersRepository = getRepository(User);
   const user = usersRepository.create({
      name,
      email,
      password,
   });

   await usersRepository.save(user);

   return response.status(201).json(user);
});

routes.post('/projects', async (request, response) => {
   const {
      user_id,
      name,
   } = request.body

   const projectsRepository = getRepository(Project);
   const project = projectsRepository.create({
      user_id,
      name,
   });

   await projectsRepository.save(project);

   return response.status(201).json(project);
});

routes.post('/tasks', async (request, response) => {
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
});

export default routes;