import React, { useState } from "react";
import './ProjectBoard.css'
import Button from '../../components/Button/Button'
import Label from '../../components/Label/Label'
import TextField from '../../components/TextField/TextField'
import ProjectBox from "../../components/ProjectBox/ProjectBox";
import CreateProject from "../../components/CreateProject/CreateProject";
import Menu from "../../components/Menu/Menu";

function ProjectBoard() {


   return (
      <div className="projectBoardContainer">
         <div className="boardTopBar">
            <div><Label type="bigTitle" text="ToDo List" /></div>
            <div>
               <Menu />
            </div>
         </div>

         <div className="boardBody">
            <div>
               <ProjectBox projectName="Project ABC" />
            </div>
            <div>
               <ProjectBox projectName="Project ABC" />
            </div>

            <CreateProject />
         </div>
      </div>
   );
}

export default ProjectBoard;