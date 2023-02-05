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

  let titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.name = "title";
  firstli.appendChild(titleInput);

  let descriptionInput = document.createElement("input");
  descriptionInput.type = "text";
  descriptionInput.name = "description";
  secondli.appendChild(descriptionInput);

  let dueDateInput = document.createElement("input");
  dueDateInput.type = "date";
  dueDateInput.name = "dueDate";
  thirdli.appendChild(dueDateInput);

  let priorityInput = document.createElement("select");
  priorityInput.name = "priority";
  fourthli.appendChild(priorityInput);

  let optionOne = document.createElement("option");
  optionOne.textContent = "High";
  priorityInput.appendChild(optionOne);

  let optionTwo = document.createElement("option");
  optionTwo.textContent = "Medium";
  priorityInput.appendChild(optionTwo);

  let optionThree = document.createElement("option");
  optionThree.textContent = "Low";
  priorityInput.appendChild(optionThree);

  let buttonWrapper = document.createElement("div");
  buttonWrapper.classList = "button-wrapper";
  form.appendChild(buttonWrapper);

  let addButton = document.createElement("button");
  addButton.classList = "add-todo";
  addButton.textContent = "ADD";
  buttonWrapper.appendChild(addButton);
};
