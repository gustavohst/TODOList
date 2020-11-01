import React, { useEffect, useState } from "react";
import './ProjectBoard.css'
import Label from '../../components/Label/Label'
import ProjectBox from "../../components/ProjectBox/ProjectBox";
import CreateProject from "../../components/CreateProject/CreateProject";
import Menu from "../../components/Menu/Menu";
import api from '../../services/api';

function ProjectBoard(props) {
   const { user_id = "1" } = props;

   const [projects, setProjects] = useState([]);
   //TODO: Get User Projects

   const fechProjects = async () => {
      await api.get(`projects?user_id=${user_id}`).then(response => {
         setProjects(response.data);
      });
   } 

   useEffect(()=>{
      fechProjects().then(console.log(projects));
   },[]);

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