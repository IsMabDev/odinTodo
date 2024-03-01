import { createHtmlElement } from "./management.js";
import {updateJsonProjectsList,getJsonProjects} from "./connection.js"
function updateTasksContainer(selectedProjects) {

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


  
 
  mainContainer.appendChild(tasksContainer);
  updateProjectsDetails(selectedProjects)
}
function updateProjectsDetails(someProjects) {
  let  oldProjectsDetailsContainer=document.querySelector("#projectsDetailsContainer")
  const checkTasksContainer=document.querySelector("#tasksContainer")

   if(oldProjectsDetailsContainer!==null) {
    oldProjectsDetailsContainer.innerText="";
  } else { oldProjectsDetailsContainer=createHtmlElement("div","projectsDetailsContainer")}
   
  let tasks = [];
  const projectsDetailsContainer=createHtmlElement("div","projectsDetailsContainer")
  someProjects.forEach((project) => {
   
    const projectOfTaskscontainer = createHtmlElement(
      "h2",
      null,
      ["projectOfTask"],
      project["title"]
    );
    
    projectsDetailsContainer.appendChild(projectOfTaskscontainer);
    tasks = [];
    if (project["tasks"].length !== 0)
      project["tasks"].forEach((task) => {
        tasks.push(task);
      });
    tasks.forEach((task) => {
      const oneTaskContainer = createHtmlElement("div", null, ["oneTaskContainer"]);

      const taskIsCompleted = createHtmlElement("input");
      taskIsCompleted.type = "checkbox";
      const taskTitle = createHtmlElement(
        "label",
        null,
        ["task"],
        task["title"]
      );

      const taskDueDate = createHtmlElement(
        "h4",
        null,
        ["dueDate"],
        task["dueDate"]
      );

      const editTask = createHtmlElement("button", null, ["editTask"]);

      const deleteTask = createHtmlElement("button", null, ["deleteTask"]);

      oneTaskContainer.append(
        taskIsCompleted,
        taskTitle,
        taskDueDate,
        editTask,
        deleteTask
      );
     
      projectsDetailsContainer.appendChild(oneTaskContainer);
    });
  });
  oldProjectsDetailsContainer.appendChild(projectsDetailsContainer)
  checkTasksContainer.appendChild(oldProjectsDetailsContainer)
}

export { updateTasksContainer,updateProjectsDetails };
