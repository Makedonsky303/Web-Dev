// document.addEventListener("DOMContentLoaded", function () {
//     const input = document.querySelector(".add_input");
//     const addButton = document.querySelector(".add_btn");
//     const tasksContainer = document.querySelector(".tasks");
//     const clrButton = document.querySelector(".clr_btn");
//     const completeAllButton = document.querySelector(".checkAll") 
//     const done = document.querySelector(".done");

//     addButton.addEventListener("click", addTask);
//     function addTask() {
//         let taskText = input.value.trim();

//         if (taskText === "") {
//             return;
//         }

        
//         let taskItem = document.createElement("div");
//         taskItem.classList.add("item");

       
//         let checkbox = document.createElement("input");
//         checkbox.type = "checkbox";

  
//         let taskTextElement = document.createElement("p");
//         taskTextElement.textContent = taskText;

        
//         checkbox.addEventListener("change", function () {
//             if (checkbox.checked) {
//                 taskTextElement.style.textDecoration = "line-through";
//                 done.prepend(taskItem);
//             } else {
//                 taskTextElement.style.textDecoration = "none";
//                 tasksContainer.prepend(taskItem);
//             }
//         });

       
//         let deleteButton = document.createElement("button");
//         deleteButton.classList.add("trash_btn");

//         deleteButton.addEventListener("click", function () {
//             taskItem.remove();
//         });

//         taskItem.appendChild(checkbox);
//         taskItem.appendChild(taskTextElement);
//         taskItem.appendChild(deleteButton);

        
//         tasksContainer.prepend(taskItem);

    
//         input.value = "";

//         sortTasks();
//     }
//     input.addEventListener("keypress", function (event) {
//         if (event.key === "Enter") {
//             addTask();
//         }
//     });
    
//     completeAllButton.addEventListener("click", function () {
//         const allTasks = document.querySelectorAll(".tasks .item");
//         allTasks.forEach(task => {
//             let checkbox = task.querySelector("input[type='checkbox']");
//             let text = task.querySelector("p");
//             checkbox.checked = true;
//             text.style.textDecoration = "line-through";
//         });
//     });

//     function sortTasks() {
//         let tasks = Array.from(tasksContainer.children);

//         tasks.sort((a, b) => {
//             let textA = a.querySelector("p").textContent.toLowerCase();
//             let textB = b.querySelector("p").textContent.toLowerCase();
//             return textA.localeCompare(textB);
//         });

//         tasksContainer.innerHTML = ""; 

//         tasks.forEach(task => tasksContainer.appendChild(task)); 
//     }

//     clrButton.addEventListener('click',function(){
//         tasksContainer.innerHTML = "";
//     });
// });


// document.addEventListener("DOMContentLoaded", function () {
//     const input = document.querySelector(".add_input");
//     const addButton = document.querySelector(".add_btn");
//     const tasksContainer = document.querySelector(".tasks");

//     addButton.addEventListener("click", function () {
//         let taskText = input.value.trim();

//         if (taskText === "") {
//             return;
//         }

        
//         let taskItem = document.createElement("div");
//         taskItem.classList.add("item");

       
//         let checkbox = document.createElement("input");
//         checkbox.type = "checkbox";

  
//         let taskTextElement = document.createElement("p");
//         taskTextElement.textContent = taskText;

        
//         checkbox.addEventListener("change", function () {
//             if (checkbox.checked) {
//                 taskTextElement.style.textDecoration = "line-through";
//             } else {
//                 taskTextElement.style.textDecoration = "none";
//             }
//         });

       
//         let deleteButton = document.createElement("button");
//         deleteButton.classList.add("trash_btn");

//         deleteButton.addEventListener("click", function () {
//             taskItem.remove();
//         });

//         taskItem.appendChild(checkbox);
//         taskItem.appendChild(taskTextElement);
//         taskItem.appendChild(deleteButton);

        
//         tasksContainer.appendChild(taskItem);

    
//         input.value = "";
//     });
// });

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
            let are_you_sure = confirm("Are you sure?")
            if(are_you_sure){
                taskItem.remove();
            }
        });

        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskTextElement);
        taskItem.appendChild(deleteButton);

        
        tasksContainer.appendChild(taskItem);

    
        input.value = "";
    });
});