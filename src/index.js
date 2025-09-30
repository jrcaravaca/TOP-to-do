import { addTaskForm } from "./components/addTaskForm.js";
import "./styles.css"; 

const taskContainer = document.getElementById('task-container'); 
const buttonAddTask = document.getElementById('add-task')

buttonAddTask.addEventListener('click', (event) => {
    event.preventDefault()
    addTaskForm(taskContainer)
})