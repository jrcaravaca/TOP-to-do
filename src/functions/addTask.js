import { savedProjects } from "..";
import { Task } from "../classes/task";
import { projects } from "../components/addButton";

export function addTask(container, project, t) {
    let taskName = ""
    if (t) {
        taskName = t.name
    } else {
        taskName = prompt('Introduce el nombre de la tarea')
    }

    const task = new Task(taskName)
    const taskArticle = document.createElement('article')
    const name = document.createElement('p')
    name.textContent = `${task.name}`

    if (t) {
        if (t.completed === true) {
            name.style.textDecoration = 'line-through'
        }
    }

    const taskDate = document.createElement('input')
    taskDate.type = 'date'; 

    if (t) {
        taskDate.value = t.dueDate
    }

    const taskRemoveButton = document.createElement('button')
    taskRemoveButton.textContent = 'Remove task'
    taskRemoveButton.classList.add('remove')
    const taskCompleteButton = document.createElement('button')
    taskCompleteButton.textContent = 'Complete task'
    taskCompleteButton.classList.add('add')

    taskDate.addEventListener('change', (e) => {
        const date = e.target.value
        const index = project.tasks.findIndex(t => t.name === task.name)
        if (index !== -1) {
            project.tasks[index].dueDate = date
        }
        console.log(projects)
        localStorage.setItem("projects", JSON.stringify(projects));
    }) 

    taskRemoveButton.addEventListener('click', (e) => {
        e.preventDefault()
        container.removeChild(taskArticle)
        const index = project.tasks.findIndex(t => t.name === task.name)
        if (index !== -1) {
            project.tasks.splice(index, 1)
        }
        localStorage.setItem("projects", JSON.stringify(projects));
    })

    taskCompleteButton.addEventListener('click', (e) => {
        e.preventDefault()
        const index = project.tasks.findIndex(t => t.name === task.name)
        if (index !== -1) {
            if (project.tasks[index].completed === false) {
                name.style.textDecoration = 'line-through'
                project.tasks[index].completed = true
            } else {
                name.style.textDecoration = 'none'
                project.tasks[index].completed = false
            }
        }
        console.log(projects)
        localStorage.setItem("projects", JSON.stringify(projects));
    })

    
    if (!project.tasks.some(t => t.name === task.name)) {
        project.tasks.push(task)
    } 

    taskArticle.appendChild(name)
    taskArticle.appendChild(taskDate)
    taskArticle.appendChild(taskRemoveButton)
    taskArticle.appendChild(taskCompleteButton)

    container.appendChild(taskArticle)
    localStorage.setItem("projects", JSON.stringify(projects));
   
}
