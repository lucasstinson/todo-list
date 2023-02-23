export { createSideBar, addProject, displayProjects };
import { preventSubmission, cancelProject } from "./tools.js";
import { displayTasks, enterTask } from "./taskManager.js";
export { projectList };
let projectList = [];
if (sessionStorage.getItem("tasks") === null) {
  projectList = [
    {
      title: "New Project",
      tasks: [
        {
          title: "Low Priority",
          description: "Description for a test task",
          dueDate: "2012-12-21",
          priority: "Low",
          status: "Open",
        },
        {
          title: "High Priority",
          description: "Description for a test task",
          dueDate: "2023-02-23",
          priority: "High",
          status: "Closed",
        },
        {
          title: "Med Priority",
          description: "Description for a test task",
          dueDate: "2023-06-20",
          priority: "Medium",
          status: "Open",
        },
      ],
    },
  ];
} else {
  const tasksFromStorage = JSON.parse(sessionStorage.getItem("tasks"));
  projectList = tasksFromStorage;
}

const body = document.querySelector("body");

const createSideBar = () => {
  const sideBar = document.createElement("div");
  sideBar.classList = "side-bar-wrapper";

  body.appendChild(sideBar);

  const allTodoWrapper = document.createElement("div");
  allTodoWrapper.classList = "category active";
  allTodoWrapper.id = "all-todo-wrapper";
  allTodoWrapper.addEventListener("click", toggleSelected);
  allTodoWrapper.addEventListener("click", hideAddTask);
  allTodoWrapper.addEventListener("click", displayTasks);
  sideBar.appendChild(allTodoWrapper);

  const allTodoImage = document.createElement("img");
  allTodoImage.classList = "all-todo-image";
  allTodoImage.src = "./images/inbox.png";
  allTodoWrapper.appendChild(allTodoImage);

  const allTodos = document.createElement("div");
  allTodos.classList = "all-todo-items";
  allTodos.textContent = "All";

  allTodoWrapper.appendChild(allTodos);

  const todayTodoWrapper = document.createElement("div");
  todayTodoWrapper.classList = "category";
  todayTodoWrapper.id = "today-todo-wrapper";
  todayTodoWrapper.addEventListener("click", toggleSelected);
  todayTodoWrapper.addEventListener("click", hideAddTask);
  todayTodoWrapper.addEventListener("click", displayTasks);
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
  upcomingTodoWrapper.classList = "category";
  upcomingTodoWrapper.id = "upcoming-todo-wrapper";
  upcomingTodoWrapper.addEventListener("click", toggleSelected);
  upcomingTodoWrapper.addEventListener("click", hideAddTask);
  upcomingTodoWrapper.addEventListener("click", displayTasks);
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
  addProjects.addEventListener("click", inputProjectName);
  projectsWrapper.appendChild(addProjects);

  const newProjectWrapper = document.createElement("div");
  newProjectWrapper.classList = "new-project-wrapper";
  sideBar.appendChild(newProjectWrapper);

  displayProjects();

  // const projectWrapper = document.createElement("div");
  // projectWrapper.classList = "category";
  // projectWrapper.id = "project-wrapper";
  // projectWrapper.dataset.project = "0";
  // projectWrapper.addEventListener("click", toggleSelected);
  // projectWrapper.addEventListener("click", seeAddTask);
  // projectWrapper.addEventListener("click", displayTasks);
  // newProjectWrapper.appendChild(projectWrapper);

  // const projectImage = document.createElement("img");
  // projectImage.classList = "project-image";
  // projectImage.src = "../dist/images/project.png";
  // projectWrapper.appendChild(projectImage);

  // const newProject = document.createElement("div");
  // newProject.classList = "new-project";
  // newProject.textContent = "New Project";
  // projectWrapper.appendChild(newProject);
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

const toggleSelected = (e) => {
  if (document.querySelector(".side-bar-wrapper .category.active")) {
    const active = document.querySelector(".side-bar-wrapper .category.active");
    active.classList.remove("active");
    addSelected(e);
  }
  // const active = document.querySelector(".side-bar-wrapper .category.active");
  // active.classList.remove("active");
  // addSelected(e);
};

const addSelected = (e) => {
  if (e.target.parentNode.className === "category") {
    e.target.parentNode.className += " active";
  } else if (e.target.className === "category") {
    e.target.className += " active";
  }
  setCategoryTitle();
};

const inputProjectName = () => {
  const newProjectWrapper = document.querySelector(".new-project-wrapper");
  const newProjectForm = document.createElement("form");
  newProjectForm.classList = "new-project-form";
  newProjectWrapper.appendChild(newProjectForm);

  const projectNameWrapper = document.createElement("div");
  projectNameWrapper.classList = "project-name-wrapper";
  newProjectForm.appendChild(projectNameWrapper);

  const projectNameInput = document.createElement("input");
  projectNameInput.type = "text";
  projectNameInput.name = "project-name";
  projectNameInput.id = "project-name";
  projectNameInput.maxLength = "12";
  projectNameWrapper.appendChild(projectNameInput);

  const projectNameButtons = document.createElement("div");
  projectNameButtons.classList = "project-name-buttons-wrapper";
  projectNameWrapper.appendChild(projectNameButtons);

  const projectAddButton = document.createElement("button");
  projectAddButton.id = "add-name";
  projectAddButton.textContent = "Add";
  projectAddButton.addEventListener("click", preventSubmission);
  projectAddButton.addEventListener("click", addProject);
  projectNameButtons.appendChild(projectAddButton);

  const projectCancelButton = document.createElement("button");
  projectCancelButton.id = "cancel-name";
  projectCancelButton.textContent = "Cancel";
  projectCancelButton.addEventListener("click", preventSubmission);
  projectCancelButton.addEventListener("click", cancelProject);
  projectNameButtons.appendChild(projectCancelButton);
};

const addProject = (e) => {
  let inputValue = e.target.parentElement.parentElement.children[0].value;
  cancelProject();

  const newProjectWrapper = document.querySelector(".new-project-wrapper");
  const projectWrapper = document.createElement("div");
  projectWrapper.classList = "category";
  projectWrapper.id = "project-wrapper";
  projectWrapper.dataset.project = newProjectWrapper.childElementCount;
  projectWrapper.addEventListener("click", toggleSelected);
  projectWrapper.addEventListener("click", seeAddTask);
  projectWrapper.addEventListener("click", displayTasks);
  newProjectWrapper.appendChild(projectWrapper);

  const projectImage = document.createElement("img");
  projectImage.classList = "project-image";
  projectImage.src = "../dist/images/project.png";
  projectWrapper.appendChild(projectImage);

  const newProject = document.createElement("div");
  newProject.classList = "new-project";

  if (inputValue == "") {
    inputValue = "Project " + newProjectWrapper.childElementCount;
  }
  newProject.textContent = inputValue;
  projectWrapper.appendChild(newProject);

  projectList.push({ title: inputValue, tasks: [] });

  console.log(projectList);
};

const setCategoryTitle = () => {
  const categoryTitle = document.querySelector(".category-title");
  const selectedCategory = document.querySelector(".category.active");
  categoryTitle.textContent = selectedCategory.children[1].textContent;
};

const seeAddTask = () => {
  if (document.querySelector(".add-task-wrapper") != null) {
    const addTask = document.querySelector(".add-task-wrapper");
    addTask.style.visibility = "visible";
  }
  if (document.querySelector("#to-do-form") != null) {
    const todoForm = document.querySelector("#to-do-form");
    todoForm.style.visibility = "visible";
  }
};

const hideAddTask = () => {
  if (document.querySelector(".add-task-wrapper") != null) {
    const addTask = document.querySelector(".add-task-wrapper");
    addTask.style.visibility = "hidden";
  }
  if (document.querySelector("#to-do-form") != null) {
    const todoForm = document.querySelector("#to-do-form");
    todoForm.style.visibility = "hidden";
  }
};

const displayProjects = () => {
  const newProjectWrapper = document.querySelector(".new-project-wrapper");
  for (let i = 0; i < projectList.length; i++) {
    let projectTitle = projectList[i].title;
    const projectWrapper = document.createElement("div");
    projectWrapper.classList = "category";
    projectWrapper.id = "project-wrapper";
    projectWrapper.dataset.project = i;
    projectWrapper.addEventListener("click", toggleSelected);
    projectWrapper.addEventListener("click", seeAddTask);
    projectWrapper.addEventListener("click", displayTasks);
    newProjectWrapper.appendChild(projectWrapper);

    const projectImage = document.createElement("img");
    projectImage.classList = "project-image";
    projectImage.src = "../dist/images/project.png";
    projectWrapper.appendChild(projectImage);

    const newProject = document.createElement("div");
    newProject.classList = "new-project";

    if (projectTitle == "") {
      projectTitle = "Project " + (i + 1);
    }
    newProject.textContent = projectTitle;
    projectWrapper.appendChild(newProject);
  }
};
