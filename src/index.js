import { todoForm, todo } from "./modules/todo.js";
import { createSearchBar } from "./modules/searchBar.js";
import { addProject, createSideBar } from "./modules/sideBar.js";

createSearchBar();
createSideBar();
todoForm();

// TO do form should contain
// title, description, dueDate, priority
// DONE

// PROJECTS
// default project on launch, but allow for new projects

// SEPERATE APPLICATION LOGIC
// creating new todos
// setting todos as complete
// changing todo priority
// Dom related application

// UI SHOULD BE ABLE TO DO THE FOLLOWING
// view all projects
// view all todos in each project (probably just the title and duedate… perhaps changing color for different priorities)
// expand a single todo to see/edit its details
// delete a todo

// OPTIONAL
// notes
// checklists

// let todo = {
//   title: "Cook",
//   description: "Need to make Steak",
//   dueDate: "02/04/2023",
//   priority: "urgent",
// };
