let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

let allTasks = {};

function createTaskObject() {
    let task = {
        name: inputField.value,
        completed: false,
        dateAdded: new Date().toLocaleString(),     //Need to account for timezones?
    }
    return task;
}

function renderTaskObject(task) {
    //Creates the elements for the task container, task item, and delete button
    let taskContainer = document.createElement('div');
    let taskItem = document.createElement('p');
    let checkBox = document.createElement('input');
    let deleteButton = document.createElement('button');
    
    taskContainer.classList.add('task-container');
    taskItem.classList.add('paragraph-styling');
    taskItem.innerText = task.name;

    checkBox.type="checkbox";
    deleteButton.innerHTML = "Delete";

    //Clears the inputfield value
    inputField.value = "";

    //Adds an eventlistener to the taskitem to add a line-through whenever the task name is clicked.
    taskItem.addEventListener('click', function() {
        taskItem.style.textDecoration = taskItem.style.textDecoration === "line-through" ? "none" : "line-through";
    })

    //Adds an eventlistener to the
    deleteButton.addEventListener('click', function() {
        toDoContainer.removeChild(taskContainer);
    });

    //Appends the task object to the taskContainer
    taskContainer.appendChild(checkBox);
    taskContainer.appendChild(taskItem);
    taskContainer.appendChild(deleteButton);

    //Adds the taskContainer div to the toDoList container
    toDoContainer.appendChild(taskContainer);
}

addToDoButton.addEventListener('click', function() {
    //Checks if the value of the input field is empty or null
    if (inputField.value.trim() === "" || inputField.value == null) {
        alert("Invalid task input");
    } else {
        allTasks[inputField.value] = createTaskObject();
        renderTaskObject(allTasks[inputField.value]);
    }
});
