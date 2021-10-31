const todoListForm = document.querySelector(".todolist-form");
const todoListInput = todoListForm.querySelector("input");
const todolistBtn = todoListForm.querySelector("button");
const todoList = document.querySelector(".todolist");
let toDos = [];


todoListForm.addEventListener("submit", toDoListSubmit);

function toDoListSubmit(event) {
    event.preventDefault();
    const userInputValue = todoListInput.value;
    const userInputValueObj = {
        text : userInputValue,
        id : Date.now()
    }
    toDos.push(userInputValueObj);
    todoListInput.value = "";
    paintTodoList(userInputValueObj);
    savedToDos();
}

function paintTodoList(userInputValue){
  const li = document.createElement("li");
  li.id = userInputValue.id;
  const span = document.createElement("span");
  const button = document.createElement("button");
  const img = document.createElement("img");
  li.appendChild(span);
  li.appendChild(button);
  button.appendChild(img);
  todoList.appendChild(li);
  span.innerText = userInputValue.text;
  img.src = "photo/accept.png";
  button.addEventListener("click", deleteList);
}

function deleteList(event){
    const li = event.target.parentElement.parentElement;
    li.remove();
    toDos = toDos.filter((todo) => todo.id != parseInt(li.id));
    savedToDos();
}

function savedToDos(){
    localStorage.setItem("toDos", JSON.stringify(toDos));
}

const savedToDosList = localStorage.getItem("toDos");

if ( savedToDosList !== null ){
  const savedToDosListparse = JSON.parse(savedToDosList);
  toDos = savedToDosListparse;
  savedToDosListparse.forEach(paintTodoList);
  
}