import { addTask } from "../components/addButton"
import { Task } from "./task"

class Project {
    constructor(name, tasks = []) {
        this.name = name
        this.tasks = tasks
    };

    addTask(name) {
        const task = new Task(name)
        this.tasks.push(task)
    }
   
}; 

export { Project }