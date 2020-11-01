import btoa from "btoa";
import atob from "atob";
import User from '../models/User';
import { getRepository } from 'typeorm';
const apiKey = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

const manageToken = {
   generateToken: async function (email: string, password: string){
      const usersRepository = getRepository(User);

      const actualUser = await usersRepository.findOne({
         where: {
            email: email,
            password: password,
         }
      });

      let validate = new Date();
      let token = "";
      validate.setHours(validate.getHours() + 4);
      token = `${email}:${password}:${validate.getTime()}:${apiKey}:${actualUser?.id}`;
      token =  btoa(token);
      return token;
   },

   verifyToken: async function(token: string){
  
      let acualTime = new Date();
      let time = acualTime.getTime();
      let user = atob(token);
      let userObject = user.split(":");

      const usersRepository = getRepository(User);

      const actualUser = await usersRepository.findOne({
         where: {
            email: userObject[0],
            password: userObject[1],
         }
      });
      console.log(userObject);
      console.log(userObject[3], apiKey);
      if(userObject && userObject[0] === actualUser?.email 
         && userObject[1] === actualUser?.password 
         && Number(userObject[2]) >= time 
         && userObject[3] === apiKey
         && Number(userObject[4]) === actualUser?.id){
         return true;
      }
      else{
         return false;
      }
   }
}
export default manageToken;