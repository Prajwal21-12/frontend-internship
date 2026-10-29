const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");

    const taskName = document.createElement("span");
    taskName.textContent = taskText;

    // Mark task as completed when clicked
    taskName.addEventListener("click", function () {
        taskName.style.textDecoration =
            taskName.style.textDecoration === "line-through"
                ? "none"
                : "line-through";
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.style.marginLeft = "12px";

    deleteButton.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(taskName);
    li.appendChild(deleteButton);
    taskList.appendChild(li);

    taskInput.value = "";
}

addButton.addEventListener("click", addTask);