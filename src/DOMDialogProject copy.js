import {addProject, createProject} from "./projects.js"
import {getJsonProjects} from "./connection.js"
import { updateALL } from "./management.js"
let i=0;
export function openProjectDialog (){
  console.log('openProjectDialog: ', ++i);

  const titleProjectDialog=document.querySelector("#titleProjectDialog") 
  const setDialogTitle=(title)=>{  titleProjectDialog.innerText=title;}
  const formProjectTitle=document.querySelector("#formProjectTitle")
  const formProjectDescription=document.querySelector("#formProjectDescription")
  // const formProjectIcon=document.querySelector("#formProjectIcon")
  formProjectTitle.setAttribute("required","true")

// functions to be implemented 
const isValidURL=(in_url)=>{
  let isValid;
  var urlRegex =  /^(?:(https?|ftp:\/\/)|file:\/\/\/).*\.(jpg|jpeg|png|gif|bmp|svg)$/i
  if (in_url==="" || urlRegex.test(in_url)) {isValid =true}
  
  else isValid=false;
  return isValid
}

return {setDialogTitle}

}
export function addNewProjectDialog(){
  console.log('addNewProjectDialog: ', ++i);

  const dialogProjectContainer= document.querySelector("#projectDialog")
  dialogProjectContainer.showModal()
  const addDialog=openProjectDialog();
  const dialogTitle=addDialog.setDialogTitle("Add New Project")
  const submitButton=document.querySelector("#projectDialog button[type='submit']")

  const handleProjectSubmitButton=()=>{
    console.log('handleProjectSubmitButton: ', ++i);
    // if (!isValidURL(formProjectIcon.value)) {
    //   alert("Please enter a valid image URL.");
    //   e.preventDefault(); // Prevent the form from being submitted
    // }
    if (formProjectTitle.value!=="") {
      const newProject=createProject(formProjectTitle.value,formProjectDescription.value)
      const projects=getJsonProjects();
      // addProject(projects, newProject)
      console.log('newProject: ', newProject);

      // updateALL(projects);

    }
  }
  // events listeners

  submitButton.removeEventListener("click",handleProjectSubmitButton);
  submitButton.addEventListener("click",(e)=>{
    e.preventDefault()
    console.log("submit")
  })
   
}

