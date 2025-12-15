import TaskManager from "./task-manager.js";
import Task from "./task.js";

const enterButton = document.querySelector("#enter");
const textInput = document.querySelector("#description");

const taskManager = new TaskManager(document.querySelector("#tasks"));

enterButton.addEventListener("click", () => {
    const description = textInput.value.trim();
    if (!description) return;

    const task = new Task(description, taskManager.onRemoveTask, () => {});
    taskManager.add(task);
    textInput.value = "";
});
