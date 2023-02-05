export { todo, todoForm, preventSubmission };
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
  form.id = "todo";

  // Make sure to adjust this
  // Make sure to adjust this
  // Make sure to adjust this
  // Make sure to adjust this
  document.querySelector("body").appendChild(form);

  let ul = document.createElement("ul");
  form.appendChild(ul);

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
  titleLabel.appendChild(titleInput);

  let descriptionLabel = document.createElement("label");
  descriptionLabel.textContent = "Description:";
  secondli.appendChild(descriptionLabel);

  let descriptionInput = document.createElement("input");
  descriptionInput.type = "text";
  descriptionInput.name = "description";
  descriptionInput.id = "description";
  descriptionLabel.appendChild(descriptionInput);

  let dueDateLabel = document.createElement("label");
  dueDateLabel.textContent = "Due Date:";
  thirdli.appendChild(dueDateLabel);

  let dueDateInput = document.createElement("input");
  dueDateInput.type = "date";
  dueDateInput.name = "due-date";
  dueDateInput.id = "due-date";
  dueDateLabel.appendChild(dueDateInput);

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

  let optionTwo = document.createElement("input");
  optionTwo.setAttribute("type", "radio");
  optionTwo.name = "priority-option";
  optionTwo.id = "medium-priority";
  optionTwo.value = "medium";
  optionWrapper.appendChild(optionTwo);

  let optionThree = document.createElement("input");
  optionThree.setAttribute("type", "radio");
  optionThree.name = "priority-option";
  optionThree.id = "low-priority";
  optionThree.value = "low";
  optionWrapper.appendChild(optionThree);

  let addButtonWrapper = document.createElement("div");
  addButtonWrapper.classList = "add-button-wrapper";
  form.appendChild(addButtonWrapper);

  let addButton = document.createElement("button");
  addButton.id = "add-todo";
  addButton.textContent = "ADD";
  addButton.addEventListener("click", preventSubmission);
  addButton.addEventListener("click", addTodo);
  addButtonWrapper.appendChild(addButton);
};

const preventSubmission = (e) => {
  e.preventDefault();
};

const addTodo = (e) => {
  let domForm = e.target.parentElement.parentElement;
  let titleTest = domForm[0].value;
  let descriptionTest = domForm[1].value;
  let dueDateTest = domForm[2].value;
  console.table(titleTest, descriptionTest, dueDateTest);
};

// addButton.addEventListener("click", conosole.log(e));
