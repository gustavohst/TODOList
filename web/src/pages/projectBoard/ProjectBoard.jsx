import React from "react";
import './ProjectBoard.css'
import Button from '../../components/Button/Button'
import Label from '../../components/Label/Label'
import TextField from '../../components/TextField/TextField'
import ProjectBox from "../../components/ProjectBox/ProjectBox";

function ProjectBoard() {
   return (
      <div className="projectBoardContainer" >
         <div>
            <ProjectBox projectName="Project ABC" />
         </div>

         <div className="examples">
            <span>EXAMPLES</span>  
            <Button layout="defaultButton" label="Add" />
            <Button layout="largeButton" label="Create Project" />
            <Label type="bigTitle" text="Create a new project" />
            <Label type="mediumTitle" text="To Do" />
            <Label type="smallTitle" text="Project ABC" />
            <TextField placeholder="Task" />

         </div>
      </div>
   );
}

export default ProjectBoard;