import { createHtmlElement } from "./management.js";
import { projectsObjectList } from "./connection.js";
function createTasksContainer() {
  let tasks = [];

  let projects = projectsObjectList;
  let selectedProjects = projects;
  const mainContainer = document.querySelector("#main");
  const tasksContainer = createHtmlElement("div", "tasksContainer");
  const taskTitleAdd = createHtmlElement("div", "taskTitleAdd");

  const tasksContainerTitle = createHtmlElement("h1", null, null, "Tasks");
  const addNewTaskButton = createHtmlElement("button", "addNewTaskButton");
  const newImage = document.createElement("img");
  newImage.src = "./images/new.svg";
  const spanNew = createHtmlElement("span", null, null, "Add new Task");
  addNewTaskButton.append(newImage, spanNew);
  taskTitleAdd.appendChild(tasksContainerTitle);
  taskTitleAdd.appendChild(addNewTaskButton);
  tasksContainer.appendChild(taskTitleAdd);
  function updateTaskContainer(someProjects) {
    someProjects.forEach((project) => {
      const projectOfTaskscontainer = createHtmlElement(
        "h2",
        null,
        ["projectOfTask"],
        project.getObject()["title"]
      );
      tasksContainer.appendChild(projectOfTaskscontainer);
      tasks = [];
      if (project.getObject()["tasks"].length !== 0)
        project.getObject()["tasks"].forEach((task) => {
          tasks.push(task);
        });

      tasks.forEach((task) => {
        const taskContainer = createHtmlElement("div", null, ["taskContainer"]);

        const taskIsCompleted = createHtmlElement("input");
        taskIsCompleted.type = "checkbox";
        const taskTitle = createHtmlElement(
          "label",
          null,
          ["task"],
          task["title"]
        );

        const editTask = createHtmlElement("button", null, ["editTask"]);

        const deleteTask = createHtmlElement("button", null, ["deleteTask"]);

        taskContainer.append(taskIsCompleted, taskTitle, editTask, deleteTask);

        tasksContainer.appendChild(taskContainer);
      });
    });
  }
  updateTaskContainer(selectedProjects);
  mainContainer.appendChild(tasksContainer);
}

export { createTasksContainer };
