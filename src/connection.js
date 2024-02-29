

//create a fake projects and store it locally

function updateJsonProjectsList(proejctsList){
  localStorage.setItem("jsonProjects", JSON.stringify(proejctsList)); 

}



//get the locally stored project Json list and convert it to list of objects
let localConvertedProjectsList = JSON.parse(
  localStorage.getItem("jsonProjects")
);

let projectsObjectList=localConvertedProjectsList;


export { projectsObjectList,updateJsonProjectsList };
