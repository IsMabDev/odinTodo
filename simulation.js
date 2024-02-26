import { createProject } from "./projects.js";
import { createTask } from "./tasks.js";

// This function is to prepare a JSON array of projects to simulate real life project
function createProjectsJSON(projectsNumber, tasksPerProject) {
  let myJsonProjects = [];
  for (let i = 0; i < projectsNumber; i++) {
    let myProject = createProject();
    // myProject.setValue("title", `The project title is Project${i}`);
    myProject.getObject()["title"] = `The project title is Project${i}`;
    myProject.getObject()["icon"] = "./images/repository.png";
    for (let j = 0; j < tasksPerProject; j++) {
      let myTask = createTask();
      myTask.getObject()["project"] = myProject.getObject()["title"];

      myTask.getObject()["description"] =
        "new description sqdf qsdf sdf sdf sdfdfqsdf ";
      myTask.getObject()["title"] = `task N°${i}${j}`;
      let tasks = myProject.getObject()["tasks"];

      tasks.push(myTask.getObject());
      console.log("tasks: ", tasks);

      myProject.getObject()["tasks"] = tasks;
    }
    myJsonProjects.push(myProject.getObject());
  }
  return myJsonProjects;
}

export { createProjectsJSON };
