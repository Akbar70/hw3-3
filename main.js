document.addEventListener("DOMContentLoaded", function () {
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => response.json())
        .then(data => {
            const taskList = document.getElementById("task-list");
            
            data.forEach(task => {
                const listItem = document.createElement("li");
                listItem.innerHTML = `
                    <h2>${task.title}</h2>
                    <p>${task.id}. ${task.title}</p>
                `;
                taskList.appendChild(listItem);
            });
        })
    
});