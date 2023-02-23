export {
  preventSubmission,
  enterKeyPressed,
  cancelTask,
  cancelProject,
  getDateTimezoneOffset,
};
import { todoForm } from "./todo.js";
import { enterTask } from "./taskManager.js";
const preventSubmission = (e) => {
  e.preventDefault();
};

const enterKeyPressed = (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
  }
};

const cancelTask = () => {
  enterTask();
  const addTask = document.querySelector(".add-task-wrapper");
  const form = document.querySelector("#to-do-form");
  const taskContainer = document.querySelector(".task-container");
  taskContainer.replaceChild(addTask, form);
  addTask.style.visibility = "visible";
};

const cancelProject = (e) => {
  const newProject = document.querySelector(".new-project-form");
  newProject.remove();
};

const getDateTimezoneOffset = () => {
  let utcDate = new Date();
  let localDate = new Date(
    utcDate.getTime() - utcDate.getTimezoneOffset() * 60000
  );
  let todayDate = localDate.toISOString().split("T")[0];
  return todayDate;
};
