import { createProject } from "./projects.js";
import { createTask } from "./tasks.js";

// This function is to prepare a JSON array of projects to simulate real life project
function createProjectsJSON(projectsNumber, tasksPerProject) {
  let myJsonProjects = [];
  for (let i = 0; i < projectsNumber; i++) {
    let myProject = createProject();
    // myProject.setValue("title", `The project title is Project${i}`);
    myProject.getObject()["title"] = `The project title is Project${i}`;
    for (let j = 0; j < tasksPerProject; j++) {
      let myTask = createTask();
      myTask.getObject()["project"] = myProject.getObject()["title"];

      myTask.getObject()["description"] =
        "new description sqdf qsdf sdf sdf sdfdfqsdf ";

      let tasks = myProject.getValue("tasks");
      tasks.push([myTask.getObject()]);
      myProject.getObject()["tasks"] = tasks;
    }
    myJsonProjects.push(myProject.getObject());
  }
  console.log("myJsonProjects: ", myJsonProjects);
  return myJsonProjects;
}

export { createProjectsJSON };
