export default class Task {
    constructor(description, onRemove) {
        this.description = description;
        this.isDone = false;
        this.onRemove = onRemove;

        // Skapa li-element
        this.element = document.createElement("li");
        this.element.classList.add("task");
        this.element.innerHTML = `
            <span class="description">${description}</span>
            <div class="buttons">
                <button class="done-btn">✔️</button>
                <button class="remove-btn">❌</button>
            </div>
        `;

        // Markera som klar
        this.element.querySelector(".done-btn").addEventListener("click", (e) => {
            e.stopPropagation();
            this.toggle();
        });

        // Ta bort task
        this.element.querySelector(".remove-btn").addEventListener("click", (e) => {
            e.stopPropagation();
            this.onRemove(this);
        });
    }

    toggle() {
        this.isDone = !this.isDone;
        this.element.classList.toggle("done");
    }
}
