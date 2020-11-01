import React, { useState, useEffect, useCallback } from "react";
import './ProjectBox.css'
import Icon from "../Icon/Icon";
import Label from '../Label/Label'
import Checkbox from "../Checkbox/Checkbox";
import TextField from "../TextField/TextField";
import Button from "../Button/Button";
import api from "../../services/api"

function ProjectBox(props) {
   const {
      projectName,
      projectId,
      taskList, //TODO: RECEIVE A CHECKLIST ITEMS
   } = props;

   const [tasks, setTasks] = useState(taskList);
   const [newTaskName, setNewTaskName] = useState();

   useEffect(()=>{
      setTasks(taskList)
   },[taskList]);

   const updateTaskStatus = async (taskId) => {
      await api.put(`tasks/${taskId}`).then(response => {
         console.log(response.data);
      });
   }

   const addTaskStatus = async (taskItem) => {
      const payload = {
         "project_id": taskItem.project_id,
         "description": taskItem.description,
         "status": 0,
         "creation_date": new Date(),
      }

      await api.post(`tasks`, payload).then(response => {
         console.log(response.data);
      });
   }

   const handleCheck = (taskItem) => {
      let status = taskItem.status === 0 ? 1 : 0;    
      let newTaskList = tasks.map(task => (task.id === taskItem.id ? {...task, status} : task));    
      updateTaskStatus(taskItem.id)
      setTasks(newTaskList);
   } 

   const handleAddTask = useCallback((newTaskName) => {
      let newTask = { id: tasks.length, description: newTaskName, status: 0, project_id: projectId }    
 
      if(tasks){
         let test = [...tasks, newTask];
         setTasks(test);
         addTaskStatus(newTask)
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
                        disabled={true}
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
