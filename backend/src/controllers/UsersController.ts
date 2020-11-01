import { Request, Response} from 'express';
import { getRepository } from 'typeorm';
import User from '../models/User';
import manageToken from "../helpers/manageToken";

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

   async login(request: Request, response: Response){
      const {
         email,
         password,
      } = request.body;

      const usersRepository = getRepository(User);

      const user = await usersRepository.findOne({
         where: {
            email: email,
            password: password,
         }
      });

      if(user){
         return response.json(await manageToken.generateToken(email, password));
      }

      return response.json('');
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