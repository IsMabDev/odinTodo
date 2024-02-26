import { createHtmlElement } from "./management.js";
import { projectsObjectList } from "./connection.js";
import { createProject } from "./projects.js";

function createProjectContainer() {
  let projects = projectsObjectList;
  const asideContainer = document.querySelector("#asideContainer");

  // update the project container
  const updatePojectContainer = () => {
    const projectContainer = createHtmlElement("div", "projectsContainer");
    const titleProjectContainer = createHtmlElement("h1", null, null, "Lists");
    projectContainer.appendChild(titleProjectContainer);
    projects.forEach((project) => {
      const projectDiv = createHtmlElement("div", null, ["project"]);
      const projectIcon = createHtmlElement("img");
      projectIcon.alt = ".";
      const projectTitle = createHtmlElement(
        "h2",
        null,
        ["projectTitle"],
        project.getObject()["title"]
      );
      projectDiv.append(projectIcon, projectTitle);
      projectContainer.append(projectDiv);
    });

    asideContainer.appendChild(projectContainer);
  };
  updatePojectContainer();
}

export { createProjectContainer };
