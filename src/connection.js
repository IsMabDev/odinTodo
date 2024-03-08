

//store the project list locally

function updateJsonProjectsList(projectsList){
  localStorage.setItem("jsonProjects", JSON.stringify(projectsList)); 

}

//get the locally stored project Json list and convert it to list of objects

function getJsonProjects(){
  const localConvertedProjectsList = JSON.parse(
    localStorage.getItem("jsonProjects")
  );
return localConvertedProjectsList
}

export { getJsonProjects,updateJsonProjectsList };
