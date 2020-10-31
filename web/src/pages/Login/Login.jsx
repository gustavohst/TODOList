import React, { useState } from "react";
import './Login.css'

import TextField from "../../components/TextField/TextField";
import Button from "../../components/Button/Button";

function Login() {

   const [loginView, setLoginView] = useState('SignIn');

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
                     <Button layout="largeButton" label="Login" />
                  </>
                  :
                  <>
                     <TextField placeholder="Choose a name" />
                     <TextField type="password" placeholder="Choose a password" />
                     <Button layout="largeButton" label="Create" />
                  </>
               }
            </div>
         </div>
      </>
   );
}

export default Login;