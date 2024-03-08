import { createProjectsContainer } from "./DOMProjects.js";
import { updateTasksContainer } from "./DOMTasks.js";
import { getJsonProjects, updateJsonProjectsList } from "./connection.js";
import { createFakeProjects } from "./simulation.js";
// import styles from "./dialog-stylesheet.css"

//create fake project using simulation.js
let fakeProjectsList = createFakeProjects(2, 5);
updateJsonProjectsList(fakeProjectsList);

//create project container
createProjectsContainer(getJsonProjects());
updateTasksContainer(getJsonProjects());
