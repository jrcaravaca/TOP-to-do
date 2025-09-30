import "./addTask.css"
import { addTask } from "./addTaskButton"

export function addTaskForm(container) {
    const taskAddForm = document.createElement('form')
    const input = document.createElement('input')
    input.setAttribute('name', 'task-name')
    input.classList.add('inputTask')
    const buttonAdd = document.createElement('button')
    buttonAdd.textContent = 'Add Task'
    buttonAdd.classList.add('buttonadd')
    const buttonCancel = document.createElement('button')
    buttonCancel.textContent = 'Cancel'
    buttonCancel.classList.add('buttoncancel')

    buttonAdd.addEventListener('click', (event) => {
        event.preventDefault()
        addTask(container, input)
        container.removeChild(taskAddForm)
    })

    buttonCancel.addEventListener('click', (event) => {
        event.preventDefault()
        container.removeChild(taskAddForm)        
    })
    
    taskAddForm.appendChild(input)
    taskAddForm.appendChild(buttonAdd)
    taskAddForm.appendChild(buttonCancel)

    container.appendChild(taskAddForm)

}
