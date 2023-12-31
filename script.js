let inputs = document.getElementById("inp");
let text = document.querySelector(".text");
let tasks = getTasksFromLocalStorage() || [];

function Add() {
    if (inputs.value == "") {
        alert("Please Enter your task");
    } else {
        tasks.push(inputs.value);
        saveTasksToLocalStorage();
        renderTasks();
        inputs.value = " ";
    }
}

function renderTasks() {
    text.innerHTML = "";
    tasks.forEach((task, index) => {
        let newElement = document.createElement("ul");
        newElement.innerHTML = `${task} <i class="fa-solid fa-xmark" data-index="${index}"></i>`;
        text.appendChild(newElement);
        newElement.querySelector("i").addEventListener("click", remove);
    });
}

function remove(event) {
    let index = event.target.dataset.index;
    tasks.splice(index, 1);
    saveTasksToLocalStorage();
    renderTasks();
}

function saveTasksToLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function getTasksFromLocalStorage() {
    return JSON.parse(localStorage.getItem("tasks"));
}
