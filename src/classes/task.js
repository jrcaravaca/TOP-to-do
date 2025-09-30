class Task{
    constructor(name) {
        this.name = name; 
        this.dueDate = ""; 
        this.completed = false
    }

    updateDate(date) {
        this.dueDate = date; 
    }

    completeTask() {
        this.completed = true; 
    }
    
}


export { Task }
