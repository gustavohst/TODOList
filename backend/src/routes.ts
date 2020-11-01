
import { Router } from 'express';
import UsersController from './controllers/UsersController';
import ProjectsController from './controllers/ProjectsController';
import TasksController from './controllers/TasksController';

const routes = Router();

routes.get('/users', UsersController.index);
routes.post('/users', UsersController.create);

routes.get('/projects', ProjectsController.index);
routes.post('/projects', ProjectsController.create);
routes.put('/projects/:id', ProjectsController.update);
routes.delete('/projects/:id', ProjectsController.delete);

routes.get('/tasks', TasksController.index);
routes.get('/tasks/:id', TasksController.show);
//routes.post('/tasks', TasksController.create);
routes.put('/tasks/:id', TasksController.update);
routes.delete('/tasks/:id', TasksController.delete);
//

export default routes;