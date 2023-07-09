const form = document.getElementById("form");
const input = document.getElementById("input");
const todosUL = document.getElementById("todos");

const todos = JSON.parse(localStorage.getItem("todos"));

if (todos) {
  todos.forEach((todo) => {
    addToDo(todo);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  addToDo();
});

function addToDo(todo = {}) {
  let todoText = input.value;

  if (todo) {
    const todoText = todo.text;
  }

  if (todoText) {
    const todoEl = document.createElement("li");

    if (todo.completed) {
      todoEl.classList.add("completed");
    }

    todoEl.addEventListener("click", () => {
      todoEl.classList.toggle("completed");

      updateLS();
    });

    todoEl.addEventListener("contextmenu", (e) => {
      e.preventDefault();

      todoEl.remove();

      updateLS();
    });

    todoEl.innerText = todoText;

    todosUL.appendChild(todoEl);

    input.value = "";

    updateLS();
  }
}

function updateLS() {
  const todosEl = document.querySelectorAll("li");

  const todos = [];

  todosEl.forEach((todoEl) => {
    todos.push({
      text: todoEl.innerText,
      completed: todoEl.classList.contains("completed"),
    });
  });

  localStorage.setItem("todos", JSON.stringify(todos));
}