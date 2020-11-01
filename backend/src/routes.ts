
import { Router } from 'express';
import UsersController from './controllers/UsersController';
import ProjectsController from './controllers/ProjectsController';
import TasksController from './controllers/TasksController';

const routes = Router();

routes.get('/users', UsersController.index);
routes.post('/users', UsersController.create);

routes.get('/projects', ProjectsController.index);
routes.post('/projects', ProjectsController.create);

routes.get('/tasks', TasksController.index);
routes.post('/tasks', TasksController.create);

export default routes;