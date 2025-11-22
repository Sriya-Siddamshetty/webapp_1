function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value.trim();

    if (task === "") return;

    let li = document.createElement("li");
    li.innerHTML = `${task} <span onclick="removeTask(this)">❌</span>`;
    document.getElementById("taskList").appendChild(li);

    input.value = "";
}

function removeTask(element) {
    element.parentElement.remove();
}
