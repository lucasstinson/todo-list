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
  enterTask();
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

  const taskWrapper = document.createElement("div");
  taskWrapper.classList = "task-wrapper";
  tasksWrapper.appendChild(taskWrapper);

  const taskCompleteButton = document.createElement("input");
  taskCompleteButton.classList = "complete-button";
  taskCompleteButton.setAttribute("type", "checkbox");
  taskWrapper.appendChild(taskCompleteButton);
};

const todoFormVisibility = () => {
  todoForm();
  const addTask = document.querySelector(".add-task-wrapper");
  const form = document.querySelector("#to-do-form");
  const taskContainer = document.querySelector(".task-container");

  taskContainer.replaceChild(form, addTask);
};
