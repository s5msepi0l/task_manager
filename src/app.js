import Task_manager from "./task-manager.js"
import Task from "./task.js";

const enter_button = document.querySelector("#enter");
const text_input =   document.querySelector("#description");

const placeholder_tasks = [
    "Go for a walk with your dog",
    "Clean your room",
    "Do the laundry",
    "Prepare a healthy meal",
    "Read a book for 30 minutes",
    "Water the plants",
    "Organize your desk",
    "Call a friend or family member",
    "Exercise for 20 minutes",
    "Write in your journal",
    "Plan your week ahead",
    "Take out the trash",
    "Watch an educational video",
    "Declutter a closet or drawer",
    "Meditate for 10 minutes",
    "Work on a hobby or project",
    "Go grocery shopping",
    "Cook a new recipe",
    "Vacuum the floors",
    "Sort through old emails"
];
var task_manager = new Task_manager(
    document.querySelector("#tasks")
);

function update_placeholder() {
    const index = Math.floor( Math.random() * placeholder_tasks.length);
    const placeholder = placeholder_tasks[index];

    if (placeholder !== text_input.placeholder)
        text_input.placeholder = placeholder;
}

function update_tasks() {
    update_placeholder();
}

enter_button.addEventListener("click", () => {
    const description = text_input.value;
    text_input.value = "";

    const task = new Task(description, task_manager.onRemoveTask);
    task_manager.add(task);

    console.log(description);
    
    update_tasks();
})

update_placeholder();