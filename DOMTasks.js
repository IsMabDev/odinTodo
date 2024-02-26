import { createHtmlElement } from "./management.js";
import { projectsObjectList } from "./connection.js";
function createTasksContainer() {
  let tasks = [];

  let projects = projectsObjectList;
  const mainContainer = document.querySelector("#main");
  const tasksContainer = createHtmlElement("div", "tasksContainer");
  const tasksContainerTitle = createHtmlElement("h1", null, null, "Tasks");
  tasksContainer.appendChild(tasksContainerTitle);
  projects.forEach((project) => {
    console.log("project: ", project.getObject());
    if (project.getObject()["tasks"].length !== 0)
      project.getObject()["tasks"].forEach((task) => {
        tasks.push(task);
      });
  });
  tasks.forEach((task) => {
    console.log("task: ", task);

    const taskElement = createHtmlElement("div", null, ["task"], task["title"]);
    tasksContainer.appendChild(taskElement);
  });

  mainContainer.appendChild(tasksContainer);
}

export { createTasksContainer };
