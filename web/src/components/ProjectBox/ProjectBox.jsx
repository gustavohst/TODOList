import React, { useState, useEffect, useCallback } from "react";
import './ProjectBox.css'
import Label from '../Label/Label'
import Checkbox from "../Checkbox/Checkbox";
import TextField from "../TextField/TextField";
import Button from "../Button/Button";
import api from "../../services/api"

function ProjectBox(props) {
   const {
      projectName,
      projectId,
      taskList,
      callback, //TODO: RECEIVE A CHECKLIST ITEMS
   } = props;

   const [tasks, setTasks] = useState();
   const [newTaskName, setNewTaskName] = useState();
   const [editProjectName, setEditProjectName] = useState(false);
   const [actualProjectName, setActualProjectName] = useState(projectName);

   useEffect(() => {
      setTasks(taskList)
   }, [taskList]);

   const updateTaskStatus = async (taskId) => {
      await api.put(`tasks/${taskId}`)
   }

   const addTaskStatus = async (taskItem) => {
      const payload = {
         "project_id": taskItem.project_id,
         "description": taskItem.description,
         "status": 0,
         "creation_date": new Date(),
      }

      await api.post(`tasks`, payload).then(response => {
         let actualTasks = tasks;
         actualTasks.push(response.data);
         setTasks(actualTasks);
      });
   }

   const deleteTask = async (taskId) => {
      await api.delete(`tasks/${taskId}`).then(() => {
         let actualTasks = tasks.filter(task => task.id !== taskId)
         setTasks(actualTasks);
      });
   }

   const deleteProject = async (projectId) => {
      await api.delete(`projects/${projectId}`).then(() => {
         callback(true);
      });
   }

   const editProject = async (newProjectName) => {
      const payload = {
         "name": newProjectName,
      }

      await api.put(`projects/${projectId}`, payload).then(response => {
         setActualProjectName(newProjectName);
         setEditProjectName(false);
      });
   }

   const handleCheck = (taskItem) => {
      let status = taskItem.status === 0 ? 1 : 0;
      let newTaskList = tasks.map(task => (task.id === taskItem.id ? { ...task, status } : task));
      updateTaskStatus(taskItem.id)
      setTasks(newTaskList);
   }

   const handleAddTask = useCallback((newTaskName) => {
      let newTask = {
         id: tasks.length,
         description: newTaskName,
         status: 0,
         project_id: projectId,
         creation_date: new Date(),
      }

      if (tasks) {
         let test = [...tasks, newTask];
         setTasks(test);
         addTaskStatus(newTask)
      }
   }, [tasks]);

   const formatData = (date) => {
      return new Date(date).toLocaleDateString();
   }

   return (
      <>
         <div className="projectBoxContainer">
            <div className="boxBlocks">
               <div className="topBar">
                  {
                     editProjectName
                        ?
                        <div><TextField
                           type="smallTitle"
                           onBlur={(event) => editProject(event.target.value)}
                        />
                        </div>
                        :
                        <div><Label text={actualProjectName} type="smallTitle" /></div>
                  }
                  <div>
                     <Button
                        onClick={() => setEditProjectName(!editProjectName)}
                        icon="edit"
                     />
                     <Button
                        onClick={() => deleteProject(projectId)}
                        icon="delete_forever"
                     />
                  </div>
               </div>
               <div className="checkListTitle">
                  <Label text="To Do" type="mediumTitle" />
               </div>
               <div className="checkList">
                  {tasks && tasks.filter(task => task.status === 0).map((task) => {
                     return (
                        <div className="listItem">
                           <Checkbox
                              key={task.id}
                              label={task.description}
                              checked={task.status}
                              onChange={() => handleCheck(task)}
                           />
                           <Button
                              onClick={() => deleteTask(task.id)}
                              icon="delete_forever"
                           />
                           <div className="tooltip">
                              <span>Description: {task.description}</span>
                              <span>Create date: {formatData(task.creation_date)}</span>
                           </div>
                        </div>
                     )
                  })}
               </div>
               <div className="checkListTitle">
                  <Label text="Done" type="mediumTitle" />
               </div>

               <div className="checkList">
                  {tasks && tasks.filter(task => task.status === 1).map((task) => {
                     return (
                        <div className="listItem">
                           <Checkbox
                              key={task.id}
                              label={task.description}
                              checked={task.status}
                              disabled={true}
                           />
                           <div className="tooltip">
                              <span>Description: {task.description}</span>
                              <span>Create date: {formatData(task.creation_date)}</span>
                              <span>Done date: {formatData(task.finish_date)}</span>
                           </div>
                        </div>
                     )
                  })}
               </div>
            </div>
            <div className="boxBlocks">
               <div className="pipeLine" />
               <div className="addNewTask">
                  <TextField
                     placeholder="Task"
                     onBlur={event => setNewTaskName(event.target.value)}
                  />
                  <Button
                     layout="defaultButton"
                     label="Add"
                     onClick={() => handleAddTask(newTaskName)}
                  />
               </div>
            </div>
         </div>
      </>
   );
}

export default ProjectBox;
