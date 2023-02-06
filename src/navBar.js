import { enterKeyPressed } from "./tools.js";

const createNavBar = () => {
  let navBar = document.createElement("nav");
  navBar.classList = "nav-bar-wrapper";

  document.querySelector("body").appendChild(navBar);

  let form = document.createElement("form");
  form.id = "search-form";
  navBar.appendChild(form);

  let searchBarWrapper = document.createElement("div");
  searchBarWrapper.classList = "search-bar-wrapper";
  form.appendChild(searchBarWrapper);

  let magnifyingGlass = document.createElement("img");
  magnifyingGlass.classList = "magnifying-glass";
  magnifyingGlass.src = "../dist/images/magnifying-glass.png";
  searchBarWrapper.appendChild(magnifyingGlass);

  let searchInput = document.createElement("input");
  searchInput.setAttribute("type", "text");
  searchInput.id = "search-todo";
  searchInput.name = "search-todo";
  searchInput.placeholder = " SEARCH TO-DOs";
  searchInput.addEventListener("keydown", enterKeyPressed);
  searchBarWrapper.appendChild(searchInput);
};

export { createNavBar };
