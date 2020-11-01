import React, { useState } from "react";

import './Login.css'
import TextField from "../../components/TextField/TextField";
import Button from "../../components/Button/Button";

import api from '../../services/api'

function Login() {

   const [loginView, setLoginView] = useState('SignIn');
   const [userName, setUserName] = useState('');
   const [userEmail, setUserEmail] = useState('');
   const [userPassword, setUserPassword] = useState('');

   const redirectPage = () => {
      window.location.pathname = "/board";
   }

   const createUser = async (taskItem) => {
      const payload = {
         "name": userName,
         "email": userEmail,
         "password": userPassword
      }

      await api.post('users', payload).then(() => {
         redirectPage();
      });
   }

   return (
      <>
         <div className="loginContainer">
            <div className="topSignBar">
               <Button
                  layout={`topButton ${(loginView === 'SignIn') ? 'focused' : ''}`}
                  label="Sign In"
                  onClick={() => setLoginView('SignIn')}
               />
               <Button
                  layout={`topButton ${(loginView === 'SignUp') ? 'focused' : ''}`}
                  label="Sign Up"
                  onClick={() => setLoginView('SignUp')}
               />
            </div>

            <div className="loginBody">
               {loginView === 'SignIn'
                  ?
                  <>
                     <TextField placeholder="User name" />
                     <TextField type="password" placeholder="Password" />
                     <Button layout="largeButton" label="Login" onClick={() => redirectPage()} />
                  </>
                  :
                  <>
                     <TextField placeholder="Choose a name" onBlur={event => setUserName(event.target.value)} />
                     <TextField placeholder="Email" onBlur={event => setUserEmail(event.target.value)} />
                     <TextField type="password" placeholder="Choose a password" onBlur={event => setUserPassword(event.target.value)} />
                     <Button layout="largeButton" label="Create" onClick={() => createUser()} />
                  </>
               }
            </div>
         </div>
      </>
   );
}

export default Login;