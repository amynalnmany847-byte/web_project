document.addEventListener('DOMContentLoaded', () => {
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', () => {
        const text = taskInput.value.trim();
        if (text === "") return;

        const li = document.createElement('li');
        li.innerHTML = `
            <span>${text}</span>
            <button onclick="this.parentElement.remove()">إنجاز</button>
        `;

        taskList.appendChild(li);
        taskInput.value = "";
    });
});
