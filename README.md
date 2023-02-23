# todo-list

This Todo List which will incorporate the information learned thus far including OOP, IIFEs, Modules, & S.O.L.I.D principles

### Project: The Todo List

The project is from The Odin Project [curriculum](https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/todo-list). Or see the Assignment Below.

A **live preview** of the project is [here](https://lucasstinson.github.io/todo-list/).

### Overview

#### **Features:**

- You can add projects.
- You can add and delete and tasks.
- You can include a title, description, due date and priority for the task.
- Each task is categorized under it’s project and based on a time window.
  - **ALL** displays all tasks
  - **Today** displays all tasks due today
  - **Upcoming** displays all tasks from today on
- You can mark tasks as complete.
- Session Storage has been implemented (data will remain until you close your browser or delete the Session data)

#### **Tools:**

<p align="left"> 
<a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="50" height="50"/> </a> 
<a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="50" height="50"/> </a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="50" height="50"/> </a>
<a href="https://webpack.js.org" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/webpack/webpack-original.svg" alt="webpack" width="50" height="50"/> </a> 
</p>

#### **Areas of Improvement:**

- The code for displaying elements is much more manual than it should be. A more effective use of the array of objects containing the projects and task would lead to a reduction in code and an easier read.
- A user should be able to remove the projects and thus all tasks related to that project.
- A Search bar can be added to find tasks much easier.
- A user should be able to edit a project name and task
- Once these improvements are made, then local Storage can be used.

### Assignment

<div class="lesson-content__panel" markdown="1">

1. Your 'todos' are going to be objects that you'll want to dynamically create, which means either using factories or constructors/classes to generate them.

1. Brainstorm what kind of properties your todo-items are going to have. At a minimum they should have a `title`, `description`, `dueDate` and `priority`. You might also want to include `notes` or even a `checklist`.

1. Your todo list should have `projects` or separate lists of `todos`. When a user first opens the app, there should be some sort of 'default' project to which all of their todos are put. Users should be able to create new projects and choose which project their todos go into.

1. You should separate your application logic (i.e. creating new todos, setting todos as complete, changing todo priority etc.) from the DOM-related stuff, so keep all of those things in separate modules.

1. The look of the User Interface is up to you, but it should be able to do the following:

   1. view all projects

   1. view all todos in each project (probably just the title and duedate... perhaps changing color for different priorities)

   1. expand a single todo to see/edit its details

   1. delete a todo

1. For inspiration, check out the following great todo apps. (look at screenshots, watch their introduction videos etc.)

   1. [Todoist](https://en.todoist.com/)

   1. [Things](https://culturedcode.com/things/)

   1. [any.do](https://www.any.do/)

1. Since you are probably already using webpack, adding external libraries from npm is a cinch! You might want to consider using the following useful library in your code:

   1. [date-fns](https://github.com/date-fns/date-fns) gives you a bunch of handy functions for formatting and manipulating dates and times.

1. We haven't learned any techniques for actually storing our data anywhere, so when the user refreshes the page, all of their todos will disappear! You should add some persistence to this todo app using the Web Storage API.

   1. `localStorage` ([docs here](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)) allows you to save data on the user's computer. The downside here is that the data is ONLY accessible on the computer that it was created on. Even so, it's pretty handy! Set up a function that saves the projects (and todos) to localStorage every time a new project (or todo) is created, and another function that looks for that data in localStorage when your app is first loaded. Additionally, here are a couple of quick tips to help you not get tripped up:
      - Make sure your app doesn't crash if the data you may want retrieve from localStorage isn't there!
      - localStorage uses [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) to send and store data, and when you retrieve the data, it will also be in JSON format. You will learn more about this language in a later lesson, but it doesn't hurt to get your feet wet now. Keep in mind you _cannot store functions in JSON_, so you'll have to figure out how to add methods back to your object properties once you fetch them. Good luck!

</div>
