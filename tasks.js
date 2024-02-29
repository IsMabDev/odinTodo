
const createTask=(()=> {

  let taskId=0;

  return (projectId,project,title,type,description,dueDate,isCompleted)=> {
  let task = {
    projectId,
    taskId: taskId++,
    project,
    title,
    type,
    description,
    dueDate,
    isCompleted,

  }
  return task;
}})();




export { createTask };
