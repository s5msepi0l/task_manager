import Task from "./task.js"

export default class TaskManager {
    constructor(list_ptr) {
        this.tasks = []; // current task stack
        this.element = list_ptr; // list pointer
        
        this.element.innerText = "\n";
        //this.load();
    }

    add(task) {
        this.tasks.push(task);

        this.element.innerHTML += task.description + "\n";
    }

    /* remove Task refrence from array
     * returns true if found
    */
    onRemoveTask(task) {
        for (let i = 0; i < this.tasks.length; i++) {
            let tsk = this.tasks[i];

            if (tsk.description === task.description) {
                this.tasks.splice(i, 1);
                return true;
            }
        }

        return false;
    }

    
    // Save current state in local storage
    save(){
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
    }

    // get current state from local storage
    load(){
        this.tasks = JSON.parse(localStorage.getItem("tasks"));
    } 
}