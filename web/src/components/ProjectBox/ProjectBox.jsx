import React, { useState, useEffect, useCallback } from "react";
import './ProjectBox.css'
import Icon from "../Icon/Icon";
import Label from '../Label/Label'
import Checkbox from "../Checkbox/Checkbox";
import TextField from "../TextField/TextField";
import Button from "../Button/Button";

function ProjectBox(props) {
   const {
      projectName,
      taskList, //TODO: RECEIVE A CHECKLIST ITEMS
   } = props;

   const [tasks, setTasks] = useState(taskList);
   const [newTaskName, setNewTaskName] = useState();

   const handleCheck = (taskItem) => {
      let status = taskItem.status === 0 ? 1 : 0;    
      let newTaskList = tasks.map(task => (task.id === taskItem.id ? {...task, status} : task));    
      //TODO: Insert in database.
      setTasks(newTaskList);
   } 

   const handleAddTask = useCallback((newTaskName) => {
      let newTask = { id: tasks.length, taskName: newTaskName, status: 0 }    
 
      if(tasks){
         let test = [...tasks, newTask];
         setTasks(test);
      }
      //TODO: Insert in database.    
   },[tasks]);

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
                        label={task.description}
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
                        label={task.description} 
                        checked={task.status}
                        onChange={() => handleCheck(task)}
                     />)
               })}
            </div>
            <div className="pipeLine" />
            <div className="addNewTask">
               <TextField placeholder="Task" onBlur={event => setNewTaskName(event.target.value)} />
               <Button layout="defaultButton" label="Add" onClick={() => handleAddTask(newTaskName)} />
            </div>
         </div>
      </>
   );
}

export default ProjectBox;
