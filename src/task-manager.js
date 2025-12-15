import Task from "./task.js";

export default class TaskManager {
    constructor(container) {
        this.tasks = [];
        this.container = container;

        this.onRemoveTask = this.onRemoveTask.bind(this);
        this.load();
        this.update();
    }

    add(task) {
        this.tasks.push(task);
        this.save();
        this.update();
    }

    onRemoveTask(task) {
        this.tasks = this.tasks.filter(t => t !== task);
        this.save();
        this.update();
    }

    update() {
        this.container.innerHTML = "";
        this.tasks.forEach(task => this.container.appendChild(task.element));
    }

    save() {
        const data = this.tasks.map(t => ({
            description: t.description,
            isDone: t.isDone
        }));
        localStorage.setItem("tasks", JSON.stringify(data));
    }

    load() {
        const data = JSON.parse(localStorage.getItem("tasks") || "[]");
        data.forEach(d => {
            const task = new Task(d.description, this.onRemoveTask);
            if (d.isDone) task.toggle();
            this.tasks.push(task);
        });
    }
}