import { updateALL } from "./management.js";
import {getJsonProjects} from "./connection.js"


const createTask=(()=> {

  let taskId=0;

  return (title,type,description,dueDate,isCompleted,projectId,project)=> {
  let task = {
    projectId,
    taskId: taskId++,
    project,
    title,
    type,
    description,
    dueDate,
    isCompleted,

  }
  return task;
}})();
function addTaskToProject(newTask,projectId){
  const projectsList=getJsonProjects();
  const selectedProject=projectsList.filter(element=>element.projectId==projectId)[0]
  newTask.projectId=selectedProject.projectId;
  newTask.project=selectedProject.title;
  selectedProject.tasks.push(newTask)
  updateALL(projectsList)
}




export { createTask,addTaskToProject };
