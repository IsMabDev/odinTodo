import {addProject, createProject} from "./projects.js"
import {getJsonProjects} from "./connection.js"
import { updateALL } from "./management.js"

const titleProjectDialog=document.querySelector("#titleProjectDialog") ;
const formContainer=document.querySelector("form")
const formProjectTitle=document.querySelector("#formProjectTitle")
const formProjectDescription=document.querySelector("#formProjectDescription")
formProjectTitle.setAttribute("required","true")
const dialogProjectContainer= document.querySelector("#projectDialog")
const submitButton=document.querySelector("#projectDialog button[type='submit']")

export function createNewProjectDialog (){
// add function

  titleProjectDialog.innerText="Add New Project"
  const handleProjectSubmitButton=(e)=>{
    e.preventDefault()
    
    if (formProjectTitle.value!=="") {
      const newProject=createProject(formProjectTitle.value,formProjectDescription.value)
      const projects=getJsonProjects();
      addProject(projects, newProject)
      updateALL(projects);
      dialogProjectContainer.close()
      formContainer.reset()
    }
  }
   // events listeners
   submitButton.addEventListener("click",handleProjectSubmitButton)
}

export function editProjectDialog(in_project){

}
 
   






