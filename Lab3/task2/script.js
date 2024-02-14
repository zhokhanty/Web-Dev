const form = document.getElementById('add-task');
const newTaskInput = document.getElementById('new-task');
const tasksList = document.getElementById('tasks');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const newTask = newTaskInput.value;

    if (!newTask) {
        return;
    }

    const listItem = document.createElement('li');
    listItem.classList.add('todo-item');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => {
        listItem.classList.toggle('completed');
    });

    const label = document.createElement('label');
    label.textContent = newTask;
    label.addEventListener('click', () => {
        checkbox.click();
    });

    const deleteButton = document.createElement('img');
    deleteButton.src = 'delete.png';
    deleteButton.addEventListener('click', () => {
        tasksList.removeChild(listItem);
    });

    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    listItem.appendChild(deleteButton);

    tasksList.appendChild(listItem);

    newTaskInput.value = '';
});
