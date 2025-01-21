import Task from "./task.js"

export default class TaskManager {
    constructor(list_ptr) {
        this.tasks = []; // current task stack
        this.element = list_ptr; // list pointer
        
        this.element.innerHTML = "";
        this.load();
        
    }

    add(task) {
        this.tasks.push(task);
        this.save();

        this.update();
    }

    /* remove Task refrence from array
     * returns true if found
    */
    onRemoveTask(task) {
        for (let i = 0; i < this.tasks.length; i++) {
            let tsk = this.tasks[i].description;
            
            if (tsk === task) {
                this.tasks.splice(i, 1);
                
                this.save()
                return true;


            }
        }

        return false;
    }

    update() {
        this.element.innerHTML = "";

        for (let i = 0; i<this.tasks.length; i++) {
            
            this.element.innerHTML += `<span>${this.tasks[i].description}</span><br/>`;
        }
    }
    
    // Save current state in local storage
    save(){
        console.log("saving:" + JSON.stringify(this.tasks));
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
    }

    // get current state from local storage
    load(){
        const json = JSON.parse(localStorage.getItem("tasks"));
        if (json != null) {
            this.tasks = json;
        }
    }
}