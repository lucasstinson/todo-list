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

const cancelTask = (e) => {
  e.target.parentElement.parentElement.parentElement.remove();
  enterTask();
};

const cancelProject = (e) => {
  e.target.parentElement.parentElement.remove();
};
