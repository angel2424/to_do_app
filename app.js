//Task inpit field

let taskInput = document.querySelector('.task_input');
const taskList = document.querySelector('.task_list');
const taskItem = document.querySelector('.task_item');
const task = document.querySelector('.task');
const doneBtn = document.querySelector('.done_btn');
const deleteBtn = document.querySelector('delete_btn');

//This listens for enter key press and clears de input
taskInput.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
        event.preventDefault();
        taskList.insertAdjacentHTML(
            'beforeend',
            `<div class="task_item">
                <button class="done_btn"></button>
                <p class="task">${taskInput.value}</p>
                <button class="delete_btn"><img src="images/icon-cross.svg" alt=""></button>
            </div>`
        );
        taskInput.value = '';
    }
});

taskList.addEventListener('click', (event) => {
    if (event.target.classList.contains('done_btn')) {
        if (event.target.style.background == '') {
            event.target.style.background = 'linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))';
            event.target.innerHTML = '<img src="images/icon-check.svg" alt="">';
            event.target.nextElementSibling.style.textDecoration = 'line-through';
        } else if (event.target){
            event.target.style.background = '';
            event.target.innerHTML = '';
            event.target.nextElementSibling.style.textDecoration = 'none';
        };
    }

});
