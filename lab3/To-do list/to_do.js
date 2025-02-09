document.addEventListener("DOMContentLoaded", function () {
    const input = document.querySelector(".add_input");
    const addButton = document.querySelector(".add_btn");
    const tasksContainer = document.querySelector(".tasks");

    addButton.addEventListener("click", function () {
        let taskText = input.value.trim();

        if (taskText === "") {
            return;
        }

        
        let taskItem = document.createElement("div");
        taskItem.classList.add("item");

       
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";

  
        let taskTextElement = document.createElement("p");
        taskTextElement.textContent = taskText;

        
        checkbox.addEventListener("change", function () {
            if (checkbox.checked) {
                taskTextElement.style.textDecoration = "line-through";
            } else {
                taskTextElement.style.textDecoration = "none";
            }
        });

       
        let deleteButton = document.createElement("button");
        deleteButton.classList.add("trash_btn");

        deleteButton.addEventListener("click", function () {
            taskItem.remove();
        });

        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskTextElement);
        taskItem.appendChild(deleteButton);

        
        tasksContainer.appendChild(taskItem);

    
        input.value = "";
    });
});
