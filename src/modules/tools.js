export { preventSubmission, enterKeyPressed };

const preventSubmission = (e) => {
  e.preventDefault();
};

const enterKeyPressed = (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
  }
};
