import React, { useState, useEffect } from "react";
import './ProjectBox.css'
import Icon from "../Icon/Icon";
import Label from '../Label/Label'
import Checkbox from "../Checkbox/Checkbox";

function ProjectBox(props) {
   const {
      projectName,
      taskList,
   } = props;

   const [tasks, setTasks] = useState();

   let taskListMock = [
      { id: 0, taskName: "Task five", status: 0 },
      { id: 1, taskName: "Task six", status: 0 },
      { id: 2, taskName: "Task seven", status: 0 },
      { id: 3, taskName: "Task eight", status: 0 },
      { id: 4, taskName: "Task one", status: 1 },
      { id: 5, taskName: "Task two", status: 1 },
      { id: 6, taskName: "Task tree", status: 1 },
      { id: 7, taskName: "Task four", status: 1 },
   ];

   useEffect(()=>{
      setTasks(taskListMock);
   },[]);

   const handleCheck = (taskItem) => {
      let status = taskItem.status === 0 ? 1 : 0;    
      let newTaskList = tasks.map(task => (task.id === taskItem.id ? {...task, status} : task));
      
      //TODO: Insert in database.
      setTasks(newTaskList);
   } 

   return (
      <>
         <div className="projectBoxContainer">
            <div className="topBar">
               <div><Label text={projectName} type="smallTitle" /></div>
               <div>
                  <Icon text="edit" />
                  <Icon text="delete_forever" />
               </div>
            </div>
            <div className="checkList">
               <Label text="To Do" type="mediumTitle" />
               {tasks && tasks.filter(task => task.status === 0).map((task) => {
                  return (
                     <Checkbox 
                        key={task.id} 
                        label={task.taskName}
                        checked={task.status}
                        onChange={() => handleCheck(task)}
                     />)
               })}
            </div>
            
            <div className="checkList">
               <Label text="Done" type="mediumTitle" />
               {tasks && tasks.filter(task => task.status === 1).map((task) => {
                  return (
                     <Checkbox 
                        key={task.id} 
                        label={task.taskName} 
                        checked={task.status}
                        onChange={() => handleCheck(task)}
                     />)
               })}
            </div>

            <div>DONE</div>
            <div>FOOTER TESTE TESTE TESTE</div>
         </div>
      </>
   );
}

export default ProjectBox;
