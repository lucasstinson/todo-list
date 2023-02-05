export { todo, todoForm };
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
  titleLabel.appendChild(titleInput);

  let descriptionLabel = document.createElement("label");
  descriptionLabel.textContent = "Description:";
  secondli.appendChild(descriptionLabel);

  let descriptionInput = document.createElement("input");
  descriptionInput.type = "text";
  descriptionInput.name = "description";
  descriptionLabel.appendChild(descriptionInput);

  let dueDateLabel = document.createElement("label");
  dueDateLabel.textContent = "Due Date:";
  thirdli.appendChild(dueDateLabel);

  let dueDateInput = document.createElement("input");
  dueDateInput.type = "date";
  dueDateInput.name = "dueDate";
  dueDateLabel.appendChild(dueDateInput);

  let priorityWrapper = document.createElement("div");
  priorityWrapper.classList = "priority-wrapper";
  fourthli.appendChild(priorityWrapper);

  let priorityTitle = document.createElement("div");
  priorityTitle.classList = "priority-label";
  priorityTitle.textContent = "Priority:";
  priorityWrapper.appendChild(priorityTitle);

  let optionWrapper = document.createElement("div");
  optionWrapper.classList = "option-wrapper";
  priorityWrapper.appendChild(optionWrapper);

  let optionOne = document.createElement("button");
  optionOne.classList = "high-priority";
  optionOne.textContent = "High";
  optionWrapper.appendChild(optionOne);

  let optionTwo = document.createElement("button");
  optionTwo.classList = "medium-priority";
  optionTwo.textContent = "Medium";
  optionWrapper.appendChild(optionTwo);

  let optionThree = document.createElement("button");
  optionThree.classList = "low-priority";
  optionThree.textContent = "Low";
  optionWrapper.appendChild(optionThree);

  let addButtonWrapper = document.createElement("div");
  addButtonWrapper.classList = "add-button-wrapper";
  form.appendChild(addButtonWrapper);

  let addButton = document.createElement("button");
  addButton.classList = "add-todo";
  addButton.textContent = "ADD";
  addButtonWrapper.appendChild(addButton);
};

const addTodo = () => {};
