
const createProject = (() => {
  let projectId = 1;

  return (title,description,icon,tasks=[])=> {
    let project = {
      projectId: projectId++,
      title,
      description,
      icon,
      tasks,
    }
    
    return project;
  };
})();


 const deleteProject = (projectsList,id) => {
  const updatedList=projectsList.filter(project=>
    project.projectId!==id
    )
  
  return updatedList
};
export { createProject,deleteProject };
