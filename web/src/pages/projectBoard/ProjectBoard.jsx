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
   const [tasks, setTasks] = useState([]);
   const [flagNewProject, setFlagNewProject] = useState(false);  
   //TODO: Get User Projects

   const fechProjects = async () => {
      await api.get(`projects?user_id=${user_id}`).then(response => {
         setProjects(response.data);
      });
   }

   const fechTasks = async () => {
      await api.get('tasks').then(response => {
         setTasks(response.data);
      });
   }

   useEffect(() => {
      fechProjects();
      fechTasks();
   }, []);

   useEffect(() => {
      fechProjects();
      fechTasks();
      setFlagNewProject(false);
   }, [flagNewProject]);
   
   return (
      <div className="projectBoardContainer">
         <div className="boardTopBar">
            <div><Label type="bigTitle" text="ToDo List" /></div>
            <div>
               <Menu />
            </div>
         </div>

         <div className="boardBody">
            <CreateProject 
               callback={setFlagNewProject}
            />
            <div className="rightPanel">
               {projects.map((project) => {
                  return (
                     <ProjectBox
                        key={project.id}
                        taskList={tasks.filter(x => x.project_id === project.id)}
                        projectName={project.name}
                        projectId={project.id}
                     />
                  );
               })
               }
            </div>
         </div>
      </div>
   );
}

export default ProjectBoard;