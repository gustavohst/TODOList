import React from 'react';
import './CreateProject.css'

import Button from '../Button/Button'
import Label from '../Label/Label'
import TextField from '../TextField/TextField'

function CreateProject() {
   return (
      <div className="createProjectContainer">
         <Label type="bigTitle" text="Create a new project" />
         <TextField placeholder="Project name" />
         <Button layout="largeButton" label="Create Project" />
      </div>
   );
}

export default CreateProject;