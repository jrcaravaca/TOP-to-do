class Task{
    constructor(name) {
        this.name = name; 
        this.dueDate = ""; 
        this.completed = false
    }

    updateDate(date) {
        this.dueDate = date; 
    }

    changeStatus() {
        if (this.completed) {
            this.completed = false
        } else {
            this.completed = true
        }
    }
    
}


export { Task }
