import { createProject } from "./projects.js";
//get the locally stored project Json list and convert it to list of objects
let localConvertedProjectsList = JSON.parse(
  localStorage.getItem("jsonProjects")
);

function convertListOfProjectsToProjectsObject(listOfProjects) {
  let myProjects = [];
  listOfProjects.forEach((element) => {
    let project = createProject(Object.keys(element), Object.values(element));
    myProjects.push(project);
  });

  return myProjects;
}
let projectsObjectList = convertListOfProjectsToProjectsObject(
  localConvertedProjectsList
);

export { projectsObjectList };
