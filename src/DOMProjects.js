import { createHtmlElement,updateALL } from "./management.js";
import { getJsonProjects } from "./connection.js";
import { createFakeProjects } from "./simulation.js";
import { deleteProject ,addProject} from "./projects.js";
import { updateProjectsDetails, updateTasksContainer } from "./DOMTasks.js";

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
  addNewProjectButton.addEventListener('click',()=>{handleAddNewProjectButtonClick() })

  //handle events
  const handleAddNewProjectButtonClick=()=>{
    projects=getJsonProjects();
    addProject(projects,createFakeProjects(1,2)[0])
    updateALL(projects)
   
    }

  asideContainer.appendChild(projectsContainer);

  projects=updateProjectsContainer(projects);
  console.log('projects: after update', projects);

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

    const deleteProjectButton = createHtmlElement("button", null, [
      
      "deleteProject",
    ]);


    // Event Listeners
    deleteProjectButton.addEventListener("click",()=>{
      handleDeleteProjectClick(project.projectId)
    })



    //handle event functions
  const handleDeleteProjectClick=(id)=>{
    
    someProjects=deleteProject(someProjects,id)
  updateALL(someProjects)
  }




    projectDiv.append(projectIcon, projectTitle, editProject, deleteProjectButton);
    projectsContainer.append(projectDiv);
  });
  console.log("projects after add",someProjects);
  return someProjects
};

export { createProjectsContainer,updateProjectsContainer };
