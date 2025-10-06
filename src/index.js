import { addItem, projects } from "./components/addButton.js";
import { Project } from "./classes/project.js";
import "./styles.css"; 
import { renderProject } from "./functions/renderProjects.js";
 
const projectContainer = document.getElementById('project-container')
const buttonAddProject = document.getElementById('add-project')
const inbox = document.getElementById('inbox')

const savedProjects = JSON.parse(localStorage.getItem("projects"));
if (savedProjects && Array.isArray(savedProjects)) {
    projects.length = 0; 
    savedProjects.forEach(p => {
        const project = new Project(p.name, p.tasks);
        projects.push(project);
        
 
        const projectButton = document.createElement('button');
        projectButton.textContent = project.name;
        projectContainer.appendChild(projectButton);

        projectButton.addEventListener('click', (e) => {
            e.preventDefault
            renderProject(project, inbox)
        })
    });
}

buttonAddProject.addEventListener('click', (event) => {
    event.preventDefault()
    addItem(projectContainer, projects)
})

export { savedProjects }





