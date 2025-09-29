class Todo{
    constructor(title, dueDate, priority, description) {
        this.id = Math.ceil(Math.random() * 1000); 
        this.title = title
        this.dueDate = dueDate
        this.priority = priority
        this.description = description
        this.completed = false
    };

    markComplete() {
        this.completed = true
    }; 

    changePriority(newPriority) {
        this.priority = newPriority; 
    }; 

}


export { Todo }