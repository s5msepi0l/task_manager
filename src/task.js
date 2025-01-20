export default class Task {
    constructor(description, destructor) {
        this.description = description;
        this.isDone = false;
        
        this.element = null;
        
        this.onRemove = destructor;
    }

    toggle() {
        this.isDone = !this.isDone;

        if (this.isDone) {
            //change this.element style ig
            this.onRemove(this);
        }
    }
}