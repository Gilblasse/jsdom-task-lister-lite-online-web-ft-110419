const submitButton = document.querySelector("#create-task-form #submit");
document.addEventListener("DOMContentLoaded", () => {
  addToList();
});

function addToList(){
  submitButton.addEventListener("submit", (e) => {
    console.log(e);
    e.preventDefault;
  });
}