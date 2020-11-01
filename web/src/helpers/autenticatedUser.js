 function getAutenticatedUser(){
   let token = JSON.parse(localStorage.getItem('token'));
   let user = atob(token);
   let userObject = user.split(":");

   let autenticatedUser = {
      id: userObject[4],
      email: userObject[0]
   } 

   return autenticatedUser;
}

export default getAutenticatedUser;