import { Todo } from "./todo"

class Project {
    constructor(name) {
        this.name = name
        this.todos = []
    };

    newTodo(title, dueDate, priority, description) {
        const todo = new Todo(title, dueDate, priority, description)
        
        this.todos.push(todo); 
    }

}; 

export { Project }