import { addItem, projects } from "./components/addButton.js";
import { Project } from "./classes/project.js";
import "./styles.css"; 
 
const projectContainer = document.getElementById('project-container')
const buttonAddProject = document.getElementById('add-project')

const savedProjects = JSON.parse(localStorage.getItem("projects"));
if (savedProjects && Array.isArray(savedProjects)) {
    projects.length = 0; // Limpia el array original
    savedProjects.forEach(p => {
        // Reconstruye como instancia de Project
        const project = new Project(p.name);
        projects.push(project);

        // Renderiza el botón en el DOM
        const projectButton = document.createElement('button');
        projectButton.textContent = project.name;
        projectContainer.appendChild(projectButton);
    });
}

buttonAddProject.addEventListener('click', (event) => {
    event.preventDefault()
    addItem(projectContainer, projects)
})







