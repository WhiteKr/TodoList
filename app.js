// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

// Functions

function addTodo(event) {
    // Prevent form from submitting
    event.preventDefault();
    // TODO DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    // TODO LIST
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // CHECK BUTTON
    const compeletedButton = document.createElement('button');
    compeletedButton.innerHTML = '<i class="fas fa-check"></i>';
    compeletedButton.classList.add('complete-btn');
    todoDiv.appendChild(compeletedButton);
    // TRASH BUTTON
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    // APPEND DIV TO LIST
    todoList.appendChild(todoDiv);
    // CLEAR TODO INPUT VALUE
    todoInput.value = '';
}

function deleteCheck(event) {
    const item = event.target;
    // DELETE TODO
    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        todo.remove();
    }

    // CHECK TODO
    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}