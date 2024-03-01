import { createHtmlElement } from "./management.js";
import { getJsonProjects, updateJsonProjectsList } from "./connection.js";

import { deleteProject } from "./projects.js";
import { updateProjectsDetails, updateTasksContainer } from "./DOMTasks.js";

function createProjectsContainer(projects) {
  const asideContainer = document.querySelector("#asideContainer");
  const projectContainer = createHtmlElement("div", "projectsContainer");
  const titleProjectContainer = createHtmlElement(
    "h1",
    "titleProjectContainer",
    null,
    "Lists"
  );
  asideContainer.appendChild(titleProjectContainer);

  const addNewProjectButton = createHtmlElement(
    "button",
    "addNewProjectButton"
  );

  const newImage = document.createElement("img");
  newImage.src = "./images/new.svg";
  const spanNew = createHtmlElement("span", null, null, "Add new List");
  addNewProjectButton.append(newImage, spanNew);

  titleProjectContainer.appendChild(addNewProjectButton);

  // update the project container
  const updateProjectsContainer = (someProjects) => {
    projectContainer.innerText="";
    someProjects.forEach((project) => {
      const projectDiv = createHtmlElement("div", null, ["project"]);
      const projectIcon = createHtmlElement("img");
      projectIcon.alt = ".";
      projectIcon.src = project["icon"];
      const projectTitle = createHtmlElement(
        "h2",
        null,
        ["projectTitle"],
        project["title"]
      );

      const editProject = createHtmlElement("button", null, ["editProject"]);

      const deleteProject = createHtmlElement("button", null, [
        
        "deleteProject",
      ]);

      deleteProject.addEventListener("click",()=>{
        handleDeleteProjectClick(project.projectId)
      })

      projectDiv.append(projectIcon, projectTitle, editProject, deleteProject);
      projectContainer.append(projectDiv);
    });

    asideContainer.appendChild(projectContainer);
  };
  const handleDeleteProjectClick=(id)=>{
    
    projects=deleteProject(projects,id)
    updateJsonProjectsList(projects)   
    updateProjectsContainer(getJsonProjects())
    updateProjectsDetails(getJsonProjects())
    }

  updateProjectsContainer(getJsonProjects());

}

export { createProjectsContainer };
