let addToDoButton = document.querySelector("#addTask");
let inputField = document.querySelector("#userTaskInput");
let toDoContainer = document.querySelector(".toDos");

inputField.addEventListener("click", selectInput);
addToDoButton.addEventListener("click", addTask);

function selectInput() {
  inputField.style["boxShadow"] = "0 6px 2px -2px darkgreen";
}

function addTask() {
  if (inputField.value.trim().length) {
    let newToDo = document.createElement("li");
    newToDo.classList.add("li-styling");
    newToDo.innerText = inputField.value;
    toDoContainer.appendChild(newToDo);

    newToDo.addEventListener("click", () => {
      newToDo.style.color = "grey";
      newToDo.style.textDecoration = "line-through";
    });

    newToDo.addEventListener("dblclick", () => {
      toDoContainer.removeChild(newToDo);
    });
  } else {
    inputField.style["boxShadow"] = "0 6px 2px -2px darkred";
  }

  inputField.value = "";
}
