export { createSideBar };

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

  const projectsImage = document.createElement("img");
  projectsImage.classList = "projects-image";
  projectsImage.src = "../dist/images/projects.png";
  projectsWrapper.appendChild(projectsImage);

  const projects = document.createElement("div");
  projects.classList = "projects-items";
  projects.textContent = "Projects";
  projectsWrapper.appendChild(projects);

  // All
  // Today
  // Upcoming
  // ---------
  // Projects
  // First Project
};
