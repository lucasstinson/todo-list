export { taskContainer, enterTask };
import { todo, todoForm } from "./todo.js";

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
  tasksTitle.textContent = "Tasks (#)";
  tasksWrapper.appendChild(tasksTitle);

  const taskWrapper = document.createElement("div");
  taskWrapper.classList = "task-wrapper";
  taskWrapper.dataset.task = 0;
  tasksWrapper.appendChild(taskWrapper);

  const taskCompleteButtonWrapper = document.createElement("div");
  taskCompleteButtonWrapper.classList = "complete-button-wrapper";
  taskWrapper.appendChild(taskCompleteButtonWrapper);

  const taskCompleteButton = document.createElement("input");
  taskCompleteButton.classList = "complete-button";
  taskCompleteButton.id = "complete-button";
  taskCompleteButton.setAttribute("type", "checkbox");
  taskCompleteButton.addEventListener("change", taskCompleted);
  taskCompleteButtonWrapper.appendChild(taskCompleteButton);

  let completeButtonLabel = document.createElement("label");
  completeButtonLabel.setAttribute("for", "complete-button");
  // completeButtonLabel.textContent = "High";
  completeButtonLabel.classList = "complete-button-label";
  taskCompleteButtonWrapper.appendChild(completeButtonLabel);

  const taskTitle = document.createElement("div");
  taskTitle.classList = "task-title";
  taskTitle.textContent = "Test Task";
  taskWrapper.appendChild(taskTitle);

  const taskDescription = document.createElement("div");
  taskDescription.classList = "task-description";
  taskDescription.textContent = "Description for a test task";
  taskWrapper.appendChild(taskDescription);

  const taskDate = document.createElement("div");
  taskDate.classList = "task-date";
  taskDate.textContent = "12/21/2012";
  taskWrapper.appendChild(taskDate);

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
  // const checkbox = document.querySelector(".complete-button");
  // checkbox.classList = ".complete-button checked";
};
