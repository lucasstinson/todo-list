export { createSideBar, addProject };

const createSideBar = () => {
  const sideBar = document.createElement("div");
  sideBar.classList = "side-bar-wrapper";

  document.querySelector("body").appendChild(sideBar);

  const allTodoWrapper = document.createElement("div");
  allTodoWrapper.classList = "all-todo-wrapper";
  sideBar.appendChild(allTodoWrapper);

  const allTodoImage = document.createElement("img");
  allTodoImage.classList = "all-todo-image";
  allTodoImage.src = "../dist/images/inbox.png";
  allTodoWrapper.appendChild(allTodoImage);

  const allTodos = document.createElement("div");
  allTodos.classList = "all-todo-items";
  allTodos.textContent = "All";
  allTodoWrapper.appendChild(allTodos);

  const todayTodoWrapper = document.createElement("div");
  todayTodoWrapper.classList = "today-todo-wrapper";
  sideBar.appendChild(todayTodoWrapper);

  const todayTodoImage = document.createElement("img");
  todayTodoImage.classList = "today-todo-image";
  todayTodoImage.src = "../dist/images/today.png";
  todayTodoWrapper.appendChild(todayTodoImage);

  const todayTodos = document.createElement("div");
  todayTodos.classList = "today-todo-items";
  todayTodos.textContent = "Today";
  todayTodoWrapper.appendChild(todayTodos);

  const upcomingTodoWrapper = document.createElement("div");
  upcomingTodoWrapper.classList = "upcoming-todo-wrapper";
  sideBar.appendChild(upcomingTodoWrapper);

  const upcomingTodoImage = document.createElement("img");
  upcomingTodoImage.classList = "upcoming-todo-image";
  upcomingTodoImage.src = "../dist/images/upcoming.png";
  upcomingTodoWrapper.appendChild(upcomingTodoImage);

  const upcomingTodos = document.createElement("div");
  upcomingTodos.classList = "upcoming-todo-items";
  upcomingTodos.textContent = "Upcoming";
  upcomingTodoWrapper.appendChild(upcomingTodos);

  const projectsWrapper = document.createElement("div");
  projectsWrapper.classList = "projects-wrapper";
  sideBar.appendChild(projectsWrapper);

  const adjustableWrapper = document.createElement("div");
  adjustableWrapper.classList = "adjustable-wrapper";
  adjustableWrapper.addEventListener("click", adjustProjects);
  projectsWrapper.appendChild(adjustableWrapper);

  const expandArrow = document.createElement("div");
  expandArrow.classList = "expand-arrow";
  expandArrow.textContent = "⮟";
  adjustableWrapper.appendChild(expandArrow);

  const projectsImage = document.createElement("img");
  projectsImage.classList = "projects-image";
  projectsImage.src = "../dist/images/projects.png";
  adjustableWrapper.appendChild(projectsImage);

  const projects = document.createElement("div");
  projects.classList = "projects-items";
  projects.textContent = "Projects";
  adjustableWrapper.appendChild(projects);

  const addProjects = document.createElement("div");
  addProjects.classList = "projects-add";
  addProjects.textContent = "+";
  addProjects.addEventListener("click", addProject);
  projectsWrapper.appendChild(addProjects);

  const newProjectWrapper = document.createElement("div");
  newProjectWrapper.classList = "new-project-wrapper";
  sideBar.appendChild(newProjectWrapper);

  const projectWrapper = document.createElement("div");
  projectWrapper.classList = "project-wrapper";
  newProjectWrapper.appendChild(projectWrapper);

  const projectImage = document.createElement("img");
  projectImage.classList = "project-image";
  projectImage.src = "../dist/images/project.png";
  projectWrapper.appendChild(projectImage);

  const newProject = document.createElement("div");
  newProject.classList = "new-project";
  newProject.textContent = "New Project";
  projectWrapper.appendChild(newProject);
};

const addProject = () => {
  const newProjectWrapper = document.querySelector(".new-project-wrapper");
  const projectWrapper = document.createElement("div");
  projectWrapper.classList = "project-wrapper";
  newProjectWrapper.appendChild(projectWrapper);

  const projectImage = document.createElement("img");
  projectImage.classList = "project-image";
  projectImage.src = "../dist/images/project.png";
  projectWrapper.appendChild(projectImage);

  const newProject = document.createElement("div");
  newProject.classList = "new-project";
  newProject.textContent = "New Project";
  projectWrapper.appendChild(newProject);
};

const adjustProjects = () => {
  const expandArrow = document.querySelector(".expand-arrow");
  const newProjectWrapper = document.querySelector(".new-project-wrapper");
  const addProjects = document.querySelector(".projects-add");
  if (expandArrow.textContent == "⮟") {
    expandArrow.textContent = "⮞";
    newProjectWrapper.style.visibility = "hidden";
    addProjects.style.visibility = "hidden";
  } else if (expandArrow.textContent == "⮞") {
    expandArrow.textContent = "⮟";
    newProjectWrapper.style.visibility = "visible";
    addProjects.style.visibility = "visible";
  }
};
