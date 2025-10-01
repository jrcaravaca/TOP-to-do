import "./addButton.css"
import { Project } from "../classes/project";
import { Task } from "../classes/task"


const projects = []

export function addItem(container, array) {
    
    const newItem = document.createElement('li')
    const newItemInput = document.createElement('input'); 
    newItemInput.type = 'text'
    const addItemButton = document.createElement('button');
    addItemButton.classList.add('buttonadd')
    addItemButton.textContent = "Add"
    const cancelButton = document.createElement('button');
    cancelButton.classList.add('buttoncancel')
    cancelButton.textContent = "Cancel"

    addItemButton.addEventListener('click', (e) => {
        e.preventDefault(); 
        const project = new Project(`${newItemInput.value}`)
        const projectButton = document.createElement('button')
        projectButton.textContent = project.name
        array.push(project)

        container.appendChild(projectButton)
        container.removeChild(newItem)
        localStorage.setItem("projects", JSON.stringify(projects));
    })

    newItem.appendChild(newItemInput)
    newItem.appendChild(addItemButton)
    newItem.appendChild(cancelButton)

    container.appendChild(newItem)
}

export { projects }