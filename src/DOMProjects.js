import { createHtmlElement,updateALL } from "./management.js";
import { getJsonProjects } from "./connection.js";
import { createFakeProjects } from "./simulation.js";
import { deleteProject ,addProject,createProject} from "./projects.js";
import { updateProjectsDetails, updateTasksContainer } from "./DOMTasks.js";
import { createNewProjectDialog,editProjectDialog } from "./DOMDialogProject.js";


function createProjectsContainer(projects) {

  // fix containers
  const asideContainer = document.querySelector("#asideContainer");
  const projectsContainer = createHtmlElement("div", "projectsContainer");
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
  asideContainer.appendChild(projectsContainer);
  const dialogProjectContainer= document.querySelector("#projectDialog")

//events
  addNewProjectButton.addEventListener('click', ()=>{ dialogProjectContainer.showModal()
   }
  )
  createNewProjectDialog()
  updateProjectsContainer(projects);

}
// update the projects container

const updateProjectsContainer = (someProjects) => {
  console.log('someProjects: ', someProjects);
  const projectsContainer=document.querySelector("#projectsContainer")
  projectsContainer.innerText="";
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
    const deleteProjectButton = createHtmlElement("button", null, ["deleteProject"]);
    projectDiv.append(projectIcon, projectTitle, editProject, deleteProjectButton);
    projectsContainer.append(projectDiv);

    // Event Listeners
    deleteProjectButton.addEventListener("click",()=>{
      handleDeleteProjectClick(project.projectId)
    })

    //handle event functions
  const handleDeleteProjectClick=(id)=>{
    someProjects=deleteProject(someProjects,id)
    updateALL(someProjects)
  }
  });
  return someProjects
};

export { createProjectsContainer,updateProjectsContainer };
