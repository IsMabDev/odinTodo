import { createProjectsContainer } from "./DOMProjects.js";
import { createTasksContainer } from "./DOMTasks.js";
import { createFakeProjects } from "./simulation.js";
import {deleteProject} from "./projects.js"
import {updateJsonProjectsList} from "./connection.js"

//create fake project using simulation.js
let fakeProjectsList = createFakeProjects(2, 5);
updateJsonProjectsList(fakeProjectsList)

// fakeProjectsList=deleteProject(fakeProjectsList,1)
// updateJsonProjectsList(fakeProjectsList)



//create project container
 createProjectsContainer();

createTasksContainer();
