function addTodo() {
  const todoList = document.getElementById("todoList");
  const elName = document.getElementById("username");
  const elDate = document.getElementById("date");

  const name = elName.value.trim();
  const date = elDate.value;

  if (name === "") {
    alert("malumot yo'q.");
    return;
  }

  const listItem = document.createElement("li");

  listItem.innerHTML = `
    <div class="task-info">
        <span class="task-title">${name}</span>
        <div class="task-datetime">${date} || --|--</div>
    </div>
    <div class="actions">
        <button class="done-btn" onclick="doneTodo(this)">Done</button>
        <button class="edit-btn" onclick="editTodo(this)">Edit</button>
        <button class="delete-btn" onclick="deleteTodo(this)">Delete</button>
    </div>
  `;

  todoList.append(listItem);
}


function doneTodo(button) {
  const li = button.closest("li");
  li.classList.toggle("done");

  button.textContent = li.classList.contains("done") ? "Undo" : "Done";
}

function editTodo(button) {
  const li = button.closest("li");
  const title = li.querySelector(".task-title");

  const newName = prompt("Yangi nom kiriting:", title.textContent);

  if (newName && newName.trim() !== "") {
    title.textContent = newName.trim();
  }
}


function deleteTodo(button) {
  const li = button.closest("li");
  li.remove();
}
