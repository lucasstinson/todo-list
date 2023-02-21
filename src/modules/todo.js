export { todo, todoForm };
import { preventSubmission, cancelTask } from "./tools.js";
import { taskContainer } from "./taskManager.js";

const todo = () => {
  let todo = {
    title: "",
    description: "",
    dueDate: "",
    priority: "",
  };

  // user input and on click it goes to create to do
};

const todoForm = () => {
  let form = document.createElement("form");
  form.id = "to-do-form";

  // Make sure to adjust this
  // Make sure to adjust this
  document.querySelector(".task-container").appendChild(form);

  let todoWrapper = document.createElement("div");
  todoWrapper.classList = "todo-wrapper";
  form.appendChild(todoWrapper);

  let ul = document.createElement("ul");
  todoWrapper.appendChild(ul);

  let firstli = document.createElement("li");
  ul.appendChild(firstli);

  let secondli = document.createElement("li");
  ul.appendChild(secondli);

  let thirdli = document.createElement("li");
  ul.appendChild(thirdli);

  let fourthli = document.createElement("li");
  ul.appendChild(fourthli);

  let titleLabel = document.createElement("label");
  titleLabel.textContent = "Title:";
  firstli.appendChild(titleLabel);

  let titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.name = "title";
  titleInput.id = "title";
  titleInput.required = true;
  titleInput.minLength = "1";
  titleInput.maxLength = "30";
  firstli.appendChild(titleInput);

  let descriptionLabel = document.createElement("label");
  descriptionLabel.textContent = "Description:";
  secondli.appendChild(descriptionLabel);

  let descriptionInput = document.createElement("input");
  descriptionInput.type = "text";
  descriptionInput.name = "description";
  descriptionInput.id = "description";
  descriptionInput.maxLength = "50";
  secondli.appendChild(descriptionInput);

  let dueDateLabel = document.createElement("label");
  dueDateLabel.textContent = "Due Date:";
  thirdli.appendChild(dueDateLabel);

  let dueDateInput = document.createElement("input");
  dueDateInput.type = "date";
  dueDateInput.name = "due-date";
  dueDateInput.id = "due-date";
  thirdli.appendChild(dueDateInput);

  let priorityWrapper = document.createElement("div");
  priorityWrapper.classList = "priority-wrapper";
  fourthli.appendChild(priorityWrapper);

  let optionWrapper = document.createElement("div");
  optionWrapper.classList = "option-wrapper";
  optionWrapper.textContent = "Priority:";
  priorityWrapper.appendChild(optionWrapper);

  let optionOne = document.createElement("input");
  optionOne.setAttribute("type", "radio");
  optionOne.name = "priority-option";
  optionOne.id = "high-priority";
  optionOne.value = "High";
  optionWrapper.appendChild(optionOne);

  let optionOneLabel = document.createElement("label");
  optionOneLabel.setAttribute("for", "high-priority");
  optionOneLabel.textContent = "High";
  optionOneLabel.classList = "option-one-label";
  optionWrapper.appendChild(optionOneLabel);

  let optionTwo = document.createElement("input");
  optionTwo.setAttribute("type", "radio");
  optionTwo.name = "priority-option";
  optionTwo.id = "medium-priority";
  optionTwo.value = "Medium";
  optionWrapper.appendChild(optionTwo);

  let optionTwoLabel = document.createElement("label");
  optionTwoLabel.textContent = "Medium";
  optionTwoLabel.setAttribute("for", "medium-priority");
  optionTwoLabel.classList = "option-two-label";
  optionWrapper.appendChild(optionTwoLabel);

  let optionThree = document.createElement("input");
  optionThree.setAttribute("type", "radio");
  optionThree.name = "priority-option";
  optionThree.id = "low-priority";
  optionThree.value = "Low";
  optionWrapper.appendChild(optionThree);

  let optionThreeLabel = document.createElement("label");
  optionThreeLabel.textContent = "Low";
  optionThreeLabel.setAttribute("for", "low-priority");
  optionThreeLabel.classList = "option-three-label";
  optionWrapper.appendChild(optionThreeLabel);

  let buttonWrapper = document.createElement("div");
  buttonWrapper.classList = "button-wrapper";
  todoWrapper.appendChild(buttonWrapper);

  let addButton = document.createElement("button");
  addButton.id = "add-todo";
  addButton.textContent = "Add";
  addButton.addEventListener("click", preventSubmission);
  addButton.addEventListener("click", getTodo);
  buttonWrapper.appendChild(addButton);

  let cancelButton = document.createElement("button");
  cancelButton.id = "cancel-todo";
  cancelButton.textContent = "Cancel";
  cancelButton.addEventListener("click", preventSubmission);
  cancelButton.addEventListener("click", cancelTask);
  cancelButton.addEventListener("click", getTodo);
  buttonWrapper.appendChild(cancelButton);
};

const getTodo = (e) => {
  // console.log(e.target.parentElement.parentElement.children[0]);
  let domForm = e.target.parentElement.parentElement.children[0];
  let titleTest = domForm.children[0].children[1].value;
  let descriptionTest = domForm.children[1].children[1].value;
  let dueDateTest = domForm.children[2].children[1].value;
  let priorityTest = document.querySelector('input[type="radio"]:checked');
  if (priorityTest == null) {
    priorityTest = "";
  }
  console.table(titleTest, descriptionTest, dueDateTest, priorityTest.value);
};
