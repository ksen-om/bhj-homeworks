const taskInput = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');
const tasksAdd = document.getElementById('tasks__add');

tasksAdd.addEventListener('click', function(e) {
    e.preventDefault();
    const userTask = taskInput.value.trim();

    if (userTask.length > 0) {
        const task = document.createElement('div');
        task.classList.add('task');

    task.innerHTML = `<div class='task__title'>
                    ${userTask}
                    </div>
                    <a href='#' class='task__remove'>&times;</a>`;

tasksList.appendChild(task);
const removeBtns = task.querySelector('.task__remove');

removeBtns.addEventListener('click', (e) => {
        e.target.closest('.task').remove();
    });
    taskInput.value = '';
}
})
