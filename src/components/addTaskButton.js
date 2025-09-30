import { Task } from "../classes/task"

export function addTask(container, input) {
        const newTask = document.createElement('article')
        newTask.classList.add('task')
        const task = new Task(`${input.value}`); 
        const taskName = document.createElement('p'); 
        taskName.textContent = `${task.name}`
        const taskDate = document.createElement('input')
        taskDate.type = 'date'
        taskDate.value = task.dueDate
        const deleteButton = document.createElement('button')
        deleteButton.textContent = 'X'

        deleteButton.addEventListener('click', (e) => {
            e.preventDefault()
            container.removeChild(newTask)
        })

        taskDate.addEventListener("change", (e) => {
            task.updateDate(e.target.value)
            console.log(task.dueDate)
        })

    

        newTask.appendChild(taskName)
        newTask.appendChild(taskDate)
        newTask.appendChild(deleteButton)

        container.appendChild(newTask)
}