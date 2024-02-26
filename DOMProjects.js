import { createHtmlElement } from "./management.js";
import { projectsObjectList } from "./connection.js";

function createProjectsContainer() {
  let projects = projectsObjectList;
  const asideContainer = document.querySelector("#asideContainer");

  // update the project container
  const updatePojectsContainer = () => {
    const projectContainer = createHtmlElement("div", "projectsContainer");
    const titleProjectContainer = createHtmlElement("h1", null, null, "Lists");
    projectContainer.appendChild(titleProjectContainer);
    projects.forEach((project) => {
      const projectDiv = createHtmlElement("div", null, ["project"]);
      const projectIcon = createHtmlElement("img");
      projectIcon.alt = ".";
      projectIcon.src = project.getObject()["icon"];
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
  updatePojectsContainer();
}

export { createProjectsContainer };
