let ctr = 1;

function deleteTodo(index) {
  const element = document.getElementById(index);
  element.parentNode.removeChild(element);
}

function editTodo(index) {
  const element = document.getElementById(index);
  const currentText = element.querySelector('.todo-text').innerText;

  const newValue = prompt("Edit your to-do item:", currentText);
  if (newValue) {
    element.querySelector('.todo-text').innerText = newValue;
  }
}

function addTodo() {
  const inputEl = document.getElementById("inputField");
  const value = inputEl.value;

  if (value) {
    const newDivEl = document.createElement("div");
    newDivEl.setAttribute("id", ctr);

    newDivEl.innerHTML = `
      <div class="todo-item">
        <span class="todo-text">${value}</span>
        <div>
          <button class="edit-btn" onclick="editTodo(${ctr})">Edit</button>
          <button class="delete-btn" onclick="deleteTodo(${ctr})">Delete</button>
        </div>
      </div>`;

    document.querySelector("body").appendChild(newDivEl);
    ctr++;
    inputEl.value = ""; 
  }
}