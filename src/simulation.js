import { createProject } from "./projects.js";
import { createTask } from "./tasks.js";
// This function is to prepare a JSON array of projects to simulate real life project
function createFakeProjects(projectsNumber, tasksPerProject) {
  let myJsonProjects = [];
  for (let i = 0; i < projectsNumber; i++) {
    let myProject = createProject();
    myProject["title"] = `The project title is Project${myProject.projectId}`;
    myProject["icon"] = "./images/repository.png";
    

    for (let j = 0; j < tasksPerProject; j++) {
      let myTask = createTask();
      myTask["project"] = myProject["title"];
      const date = new Date();
      const formattedDate = new Intl.DateTimeFormat("fr-Fr").format(date);
      myTask["dueDate"] = formattedDate;

      myTask["description"] =
        "new description sqdf qsdf sdf sdf sdfdfqsdf ";
      myTask["title"] = `task N°${i}${j}`;
      myTask["projectId"]=myProject["projectId"];
      myTask["taskId"]=myTask["taskId"];
      let tasks = myProject["tasks"];

      tasks.push(myTask);

      myProject["tasks"] = tasks;
    }
    myJsonProjects.push(myProject);
  }
  return myJsonProjects;
}

function createFakeTask(){
  const NewTask=createTask("My new task")
  NewTask.dueDate="13/04/20222"
  return NewTask

}
export { createFakeProjects,createFakeTask };
