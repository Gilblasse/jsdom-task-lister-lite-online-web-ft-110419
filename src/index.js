const submitButton = document.querySelector("#create-task-form #submit");
document.addEventListener("DOMContentLoaded", () => {
  addToList();
});

function addToList(){
  submitButton.addEventListener("click", (e) => {
    console.log(submitButton);
    e.preventDefault;
  });
}