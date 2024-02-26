import { createObject } from "./management.js";

function createProject(
  attributes = ["title", "description", "icon", "tasks"],
  values
) {
  let project = createObject(attributes, values);
  project.setValue("tasks", []);
  return project;
}

export { createProject };
