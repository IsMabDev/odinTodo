import { createObject } from "./management.js";

function createProject(
  attributes = ["title", "description", "icon", "tasks"],
  values
) {
  let project = createObject(attributes, values);
  if (project.getObject()["tasks"] === "") {
    project.getObject()["tasks"] = [];
  }
  return project;
}

export { createProject };
