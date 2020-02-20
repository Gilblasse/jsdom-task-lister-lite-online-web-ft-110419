const form = document.querySelector("#create-task-form");
const userInput = document.querySelector("#new-task-description");

document.addEventListener("DOMContentLoaded", () => {

});

form.addEventListener("submit", (e) => {
  console.log(e);
  e.preventDefault();
});