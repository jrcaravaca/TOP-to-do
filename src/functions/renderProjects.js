import { savedProjects } from "..";
import { projects } from "../components/addButton";
import { addTask } from "./addTask";


export function renderProject(project, container) {
    container.textContent = "" 
    const title = document.createElement('h2')
    title.textContent = `${project.name}`
    const taskContainer = document.createElement('div')
    taskContainer.classList.add('task-container')
    const addTaskButton = document.createElement('button')
    addTaskButton.textContent = "Add Task"
    addTaskButton.classList.add('complete')
    const deleteProjectButton = document.createElement('button')
    deleteProjectButton.textContent = 'Delete Project'
    deleteProjectButton.classList.add('remove')
    

    if (project.tasks && Array.isArray(project.tasks)) {
        project.tasks.forEach(t => {
            addTask(taskContainer, project, t)
        });
    }

    deleteProjectButton.addEventListener('click', (e) => {
        e.preventDefault()
        const index = savedProjects.indexOf(project.name)
        savedProjects.splice(index)
        localStorage.setItem("projects", JSON.stringify(savedProjects));
        location.reload()
    })

    addTaskButton.addEventListener('click', (e) => {
        e.preventDefault()
        addTask(taskContainer, project)
        localStorage.setItem("projects", JSON.stringify(projects));
    })

    const buttonContainer = document.createElement('div')
    buttonContainer.classList.add('button-container')
    container.appendChild(title)
    container.appendChild(taskContainer)
    buttonContainer.appendChild(addTaskButton)
    buttonContainer.appendChild(deleteProjectButton)

    container.appendChild(buttonContainer)
}