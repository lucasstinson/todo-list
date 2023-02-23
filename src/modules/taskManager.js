import { compareAsc, format } from "../../node_modules/date-fns";
export { taskContainer, enterTask, addTask, displayTasks };
import { todoForm } from "./todo.js";
import { projectList } from "./sideBar.js";
const taskContainer = () => {
  const body = document.querySelector("body");

  const taskContainer = document.createElement("div");
  taskContainer.classList = "task-container";
  body.appendChild(taskContainer);

  const categoryTitle = document.createElement("h2");
  categoryTitle.classList = "category-title";
  categoryTitle.textContent = "All";
  taskContainer.appendChild(categoryTitle);
  taskList();
};

const enterTask = () => {
  const taskContainer = document.querySelector(".task-container");

  const addTaskWrapper = document.createElement("div");
  addTaskWrapper.classList = "add-task-wrapper";
  addTaskWrapper.addEventListener("click", todoFormVisibility);
  taskContainer.appendChild(addTaskWrapper);

  const addTask = document.createElement("div");
  addTask.classList = "add-task";
  addTask.textContent = "+ Add Task";
  addTaskWrapper.appendChild(addTask);
};

const taskList = () => {
  const taskContainer = document.querySelector(".task-container");

  const tasksWrapper = document.createElement("div");
  tasksWrapper.classList = "tasks-wrapper";
  taskContainer.appendChild(tasksWrapper);

  const tasksTitle = document.createElement("div");
  tasksTitle.classList = "tasks-title";
  tasksTitle.textContent = "Tasks";
  tasksWrapper.appendChild(tasksTitle);

  displayTasks();
  enterTask();
};

const todoFormVisibility = () => {
  todoForm();
  const addTask = document.querySelector(".add-task-wrapper");
  const form = document.querySelector("#to-do-form");
  const taskContainer = document.querySelector(".task-container");

  taskContainer.replaceChild(form, addTask);
};

const taskCompleted = (e) => {
  if (e.target.classList.length == 1) {
    e.target.classList = "complete-button checked";
    e.target.parentNode.parentNode.style.textDecoration = "line-through";
    e.target.parentNode.parentNode.style.opacity = "0.5";
  } else if (e.target.classList.length == 2) {
    e.target.classList = "complete-button";
    e.target.parentNode.parentNode.style.textDecoration = "none";
    e.target.parentNode.parentNode.style.opacity = "1";
  }
};

const displayTasks = () => {
  const selectedCategory = document.querySelector(".category.active");
  const tasksWrapper = document.querySelector(".tasks-wrapper");
  while (tasksWrapper.childNodes.length > 1) {
    tasksWrapper.removeChild(tasksWrapper.lastChild);
  }
  if (selectedCategory.id == "all-todo-wrapper") {
    for (let i = 0; i < projectList.length; i++) {
      for (let j = 0; j < projectList[i].tasks.length; j++) {
        let title = projectList[i].tasks[j].title;
        let description = projectList[i].tasks[j].description;
        let dueDate = projectList[i].tasks[j].dueDate;
        let priority = projectList[i].tasks[j].priority;
        addTask(title, description, dueDate, priority);
      }
    }
  } else if (selectedCategory.id == "today-todo-wrapper") {
    for (let i = 0; i < projectList.length; i++) {
      for (let j = 0; j < projectList[i].tasks.length; j++) {
        let title = projectList[i].tasks[j].title;
        let description = projectList[i].tasks[j].description;
        let dueDate = projectList[i].tasks[j].dueDate;
        let priority = projectList[i].tasks[j].priority;
        // if dueDate =
        addTask(title, description, dueDate, priority);
      }
    }
  } else if (selectedCategory.id == "upcoming-todo-wrapper") {
    console.log("END Me");
  }
};

const addTask = (title, description, dueDate, priority) => {
  const tasksWrapper = document.querySelector(".tasks-wrapper");

  const taskWrapper = document.createElement("div");
  taskWrapper.classList = "task-wrapper";
  if (priority == "High") {
    taskWrapper.style.border = "1px solid rgb(255, 67, 67)";
  } else if (priority == "Medium") {
    taskWrapper.style.border = "1px solid rgb(255, 188, 62)";
  } else if (priority == "Low") {
    taskWrapper.style.border = "1px solid rgb(61, 131, 61)";
  }
  taskWrapper.dataset.task = tasksWrapper.childElementCount - 1;
  tasksWrapper.appendChild(taskWrapper);

  const taskCompleteButtonWrapper = document.createElement("div");
  taskCompleteButtonWrapper.classList = "complete-button-wrapper";
  taskWrapper.appendChild(taskCompleteButtonWrapper);

  const taskCompleteButton = document.createElement("input");
  taskCompleteButton.classList = "complete-button";
  taskCompleteButton.id =
    "complete-button" + "" + (tasksWrapper.childElementCount - 2);
  taskCompleteButton.setAttribute("type", "checkbox");
  taskCompleteButton.addEventListener("change", taskCompleted);
  taskCompleteButtonWrapper.appendChild(taskCompleteButton);

  let completeButtonLabel = document.createElement("label");
  completeButtonLabel.setAttribute(
    "for",
    "complete-button" + (tasksWrapper.childElementCount - 2)
  );

  completeButtonLabel.classList = "complete-button-label";
  taskCompleteButtonWrapper.appendChild(completeButtonLabel);

  const taskTitle = document.createElement("div");
  taskTitle.classList = "task-title";
  taskTitle.textContent = title;
  taskWrapper.appendChild(taskTitle);

  const taskDescription = document.createElement("div");
  taskDescription.classList = "task-description";
  taskDescription.textContent = description;
  taskWrapper.appendChild(taskDescription);

  const taskDate = document.createElement("div");
  taskDate.classList = "task-date";
  taskDate.textContent = dueDate;
  taskWrapper.appendChild(taskDate);
};

// while (cntnt.childNodes.length > 1) {
//   cntnt.removeChild(cntnt.lastChild);
// }
