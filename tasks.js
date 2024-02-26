import { createObject } from "./management.js";

function createTask(
  attributes = [
    "project",
    "title",
    "type",
    "description",
    "dueDate",
    "isCompleted",
  ],
  values
) {
  let task = createObject(attributes, values);
  return task;
}

export { createTask };
