const form = document.querySelector("#create-task-form");
const userInput = document.querySelector("#new-task-description");
const ulTag = document.querySelector("#list #tasks");

document.addEventListener("DOMContentLoaded", () => {

});

form.addEventListener("submit", (e) => {
  let task = userInput.value
  
  e.preventDefault();
});