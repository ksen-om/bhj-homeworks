const taskInput = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');
const tasksForm = document.getElementById('tasks__form');

tasksForm.addEventListener('click', function(e) {
    e.preventDefault();

    const userTask = taskInput.value.trim();

    if (userTask.length === 0) {
        return;
    }
    const task = `<div class='task'>
                    <div class='task__title'>
                    ${userTask}
                    </div>
                    <a href='#' class='task__remove'>&times;</a> 
                    </div>`;

tasksList.insertAdjacentHTML('beforeEnd', task);
taskInput.value = '';

const removeBtns = document.querySelectorAll('.task__remove');

Array.from(removeBtns).forEach((elem) => {
    elem.addEventListener('click', (e) => {
        e.preventDefault();
        e.target.closest('.task').remove();
    })
})
})