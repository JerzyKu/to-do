//selectors
const todoInput = document.querySelector(".todo-input")
const todoButton = document.querySelector(".todo-button")
const todoList = document.querySelector(".todo-list")
const filterOption = document.querySelector('.filter-todo')

//Event Liseners
todoButton.addEventListener("click", addTodo)
todoList.addEventListener('click', deleteCheck)
filterOption.addEventListener('click', filterTodo)


//functions

function addTodo(event){
    // Prevent form from submitting
    event.preventDefault()

    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')

    const newTodo = document.createElement('li')
    newTodo.innerHTML = todoInput.value
    todoInput.value = ''
    newTodo.classList.add('todo-item')
    todoDiv.appendChild(newTodo)

    const complettedButton = document.createElement('button')
    complettedButton.innerHTML = '<i class="fas fa-check"></i>'
    complettedButton.classList.add('complete-btn')
    todoDiv.appendChild(complettedButton)

    const trashButton = document.createElement('button')
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add('trash-btn')
    todoDiv.appendChild(trashButton)

    todoList.appendChild(todoDiv)
}

function deleteCheck(e){
    const item = e.target

    //delete element
    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        //animation
        todo.classList.add('fall')
        todo.addEventListener('transitionend', function(){todo.remove()})
    }

    //check mark
    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed')
    }

}

function filterTodo(e) {
    const todos = todoList.childNodes
    todos.forEach(function(todo) {
        switch (e.target.value) {
            case 'all':
                todo.style.display = 'flex'
                break
            case 'completed':
                if(todo.classList.contains('completed')){
                    todo.style.display = 'flex'
                } else {
                    todo.style.display = 'none'
                }
                break
            case 'uncomplited':
                if(!todo.classList.contains('completed')){
                    todo.style.display = 'flex'
                } else {
                    todo.style.display = 'none'
                }
                break
            default:
                break
        }
    })
}