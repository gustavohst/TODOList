import { Request, Response} from 'express';
import { getRepository } from 'typeorm';
import User from '../models/User';

export default {
   async index(request: Request, response: Response){
      const {
         id,
      } = request.query;

      const usersRepository = getRepository(User);

      const users = await usersRepository.find({
         where: {
            id: id,
         }
      });

      return response.json(users);
   },

   async create(request: Request, response: Response){
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
   }
};