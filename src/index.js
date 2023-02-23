import { createSearchBar } from "./modules/searchBar.js";
import { createSideBar } from "./modules/sideBar.js";
import { taskContainer, displayTasks } from "./modules/taskManager.js";
import { todoForm } from "./modules/todo.js";
import { projectList, displayProjects } from "./modules/sideBar.js";

createSearchBar();
createSideBar();
taskContainer();

// TO do form should contain
// title, description, dueDate, priority
// DONE

// PROJECTS
// default project on launch, but allow for new projects

// SEPERATE APPLICATION LOGIC
// creating new todos
// setting todos as complete
// Dom related application

// UI SHOULD BE ABLE TO DO THE FOLLOWING
// view all projects
// view all todos in each project (probably just the title and duedate… perhaps changing color for different priorities)
// edit single todo to see/edit its details
// delete a todo

// OPTIONAL
// notes
