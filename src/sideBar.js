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

  const expandArrow = document.createElement("div");
  expandArrow.classList = "expand-arrow";
  expandArrow.textContent = "⮟";
  // expandArrow.addEventListener("click", shrinkProjects);
  projectsWrapper.appendChild(expandArrow);

  const projectsImage = document.createElement("img");
  projectsImage.classList = "projects-image";
  projectsImage.src = "../dist/images/projects.png";
  projectsWrapper.appendChild(projectsImage);

  const projects = document.createElement("div");
  projects.classList = "projects-items";
  projects.textContent = "Projects";
  projectsWrapper.appendChild(projects);

  const addProjects = document.createElement("div");
  addProjects.classList = "projects-add";
  addProjects.textContent = "+";
  addProjects.addEventListener("click", addProject);
  projectsWrapper.appendChild(addProjects);

  const projectWrapper = document.createElement("div");
  projectWrapper.classList = "project-wrapper";
  sideBar.appendChild(projectWrapper);

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
  const sideBar = document.querySelector(".side-bar-wrapper");
  const projectWrapper = document.createElement("div");
  projectWrapper.classList = "project-wrapper";
  sideBar.appendChild(projectWrapper);

  const projectImage = document.createElement("img");
  projectImage.classList = "project-image";
  projectImage.src = "../dist/images/project.png";
  projectWrapper.appendChild(projectImage);

  const newProject = document.createElement("div");
  newProject.classList = "new-project";
  newProject.textContent = "New Project";
  projectWrapper.appendChild(newProject);
};
