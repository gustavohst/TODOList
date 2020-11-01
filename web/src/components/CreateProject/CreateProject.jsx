import React,{ useState } from 'react';
import './CreateProject.css';

import Button from '../Button/Button';
import Label from '../Label/Label';
import TextField from '../TextField/TextField';
import api from '../../services/api';

function CreateProject(props) {
   const {
      userId,
      callback,
   } = props;

   const [newProjectName, setNewProjectName] = useState();

   const redirectPage = () => {
      window.location.pathname = "/";
   }

   const handleCreateProject = async (projectName) => {
      const payload = {
            "user_id": userId,
            "name": projectName,
      };
      let token = JSON.parse(localStorage.getItem('token'));

      await api.post(`projects`, payload, {
         headers: {
           'Authorization': token,
         }
      }).then(() => {
         callback(true);
      }).catch(()=>{
         redirectPage();
      });
   }

   return (
      <div className="createProjectContainer">
         <Label 
            type="bigTitle" 
            text="Create a new project"      
         />
         <TextField 
            placeholder="Project name" 
            onBlur={event => setNewProjectName(event.target.value)}  
         />
         <Button
            layout="largeButton"
            label="Create Project"
            onClick={() => handleCreateProject(newProjectName)}
         />
      </div>
   );
}

export default CreateProject;