export { preventSubmission, enterKeyPressed, cancelTask, cancelProject };
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
};

const cancelProject = (e) => {
  e.target.parentElement.parentElement.remove();
};
