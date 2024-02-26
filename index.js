// import { createProject } from "./projects.js";
// import { createTask } from "./tasks.js";
import { createProjectsContainer } from "./DOMProjects.js";
import { createTasksContainer } from "./DOMTasks.js";
import { createProjectsJSON } from "./simulation.js";
import { projectsObjectList } from "./connection.js";

//create a fake projects and store it locally
let fakeJson = createProjectsJSON(13, 5);

localStorage.setItem("jsonProjects", JSON.stringify(fakeJson));

//create project container
createProjectsContainer();
createTasksContainer();
