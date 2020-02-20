const form = document.querySelector("#create-task-form");
const userInput = document.querySelector("#new-task-description");
const ulTag = document.querySelector("#list #tasks");

document.addEventListener("DOMContentLoaded", () => {

});

form.addEventListener("submit", (e) => {
  let task = userInput.value;
  let liTag = document.createElement('li');
  liTag.innerHTML = `${task} <button>&#88;</button>`;
  ulTag.appendChild(liTag);
  e.preventDefault();
});

document.addEventListener('click',function(e){
    if (e.target.tagName == "BUTTON") {
      e.target.parentElement
    }
})