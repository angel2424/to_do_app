// Variables ---------------------------------------------------------------------------------


let taskInput = document.querySelector('.task_input');
let taskIllustration = document.querySelector('.task_illustration');
const taskList = document.querySelector('.task_list');
const taskListContainer = document.querySelector('.task_list_container');
const taskContainer = document.querySelector('.task_container');
const taskItem = document.querySelectorAll('.task_item');
const taskItemCount = document.querySelectorAll('.task_item');
const task = document.querySelector('.task');
const taskMenu = document.querySelector('.tasks_menu');
const completed = document.querySelectorAll('.completed');
const doneBtn = document.querySelector('.done_btn');
const dBtn = document.querySelector('.d_btn');
const deleteBtn = document.querySelector('delete_btn');
const clear = document.querySelector('.clear_done');
const counterText = document.querySelector('.item_counter');
const tabs = document.querySelector('.tabs');
const activeTab = document.querySelector('.active_tab');
const completeTab = document.querySelector('.done_tab');


//Functions ----------------------------------------------------------------------------------


//This functions helps to remove list elements
function removeElement(element, item) {
    element.addEventListener('click', (event) => {
        if (event.target.classList.contains(item)) {
            event.target.parentElement.parentElement.remove()
            taskIllustration.style.display = 'none';
            counter()
        }
    })
    element.addEventListener('click', (event) => {
        if (element.children.length === 0) {
            taskIllustration.style.display = 'flex';

        }
    })
}

removeElement(taskListContainer, 'delete_btn');

//This functions modify the counter for items left

function counter() {
    counterText.innerText = `${counterText.parentElement.previousElementSibling.querySelectorAll('.task_item').length} items left`
}
function counterless() {
    counterText.innerText = `${counterText.parentElement.previousElementSibling.querySelectorAll('.task_item').length - document.querySelectorAll('.completed').length} items left`
}


//Event handlers --------------------------------------------------------------------------


//This listens for enter key press and clears de input
taskInput.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
        if (taskInput.value == '') {
            taskInput.value = '';
        } else {
            event.preventDefault();
            taskIllustration.style.display = 'none';
            taskList.style.minHeight = '617px';
            taskListContainer.insertAdjacentHTML(
                'afterbegin',
                `<div class="task_item">
                    <button class="done_btn"></button>
                    <p class="task">${taskInput.value}</p>
                    <button class="d_btn"><img class="delete_btn" src="images/icon-cross.svg" alt=""></button>
                </div>` 
            );
            taskInput.value = '';
            counter();
        }
    }
});


//This is the button for mobile
taskContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('input_btn')) {
        taskIllustration.style.display = 'none';
        taskList.style.minHeight = '617px';
        taskListContainer.insertAdjacentHTML(
            'afterbegin',
            `<div class="task_item">
                <button class="done_btn"></button>
                <p class="task">${taskInput.value}</p>
                <button class="d_btn"><img class="delete_btn" src="images/icon-cross.svg" alt=""></button>
            </div>` 
        );
        taskInput.value = '';
        counter();
    }
});

//This adds the checkmark to the button and adds some styles as well as the completed class to be able to identify completed tasks in the future
taskListContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('done_btn')) {
        if (event.target.style.background == '') {
            event.target.parentElement.classList.add('completed');
            event.target.style.background = 'linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))';
            event.target.innerHTML = '<img src="images/icon-check.svg" alt="">';
            event.target.nextElementSibling.style.textDecoration = 'line-through';
            counterless();
            
        } else if (event.target){
            event.target.parentElement.classList.remove('completed');
            event.target.style.background = '';
            event.target.innerHTML = '';
            event.target.nextElementSibling.style.textDecoration = 'none';
            counterless();
        };
    }

});

// This removes all the tasks that are completed
clear.addEventListener('click', (event) => {
    if (event.target.parentElement.previousElementSibling) {
        const completed = document.querySelectorAll('.completed');
        for (var complete of completed) {
            complete.remove();
          }
        counter();
    }
})

tabs.addEventListener('click', (event) => {
    let arrayOfElements = Array.from(event.target.parentElement.parentElement.previousElementSibling.children);

    if (event.target.classList.contains('all_tab')) {
            event.target.style.color = '#3a7bfd';
            document.querySelector('.active_tab').style.color = '#777a92';
            document.querySelector('.done_tab').style.color = '#777a92';
            
            const elements = arrayOfElements.filter(element => element.classList.contains('task_item'));
            
            for (const element of elements) {
                element.style.display = 'flex';
            }
        }


    if (event.target.classList.contains('active_tab')) {
        event.target.style.color = '#3a7bfd';
        document.querySelector('.all_tab').style.color = '#777a92';
        document.querySelector('.done_tab').style.color = '#777a92';

        const elements = arrayOfElements.filter(element => element.classList.contains('completed'));
        const otherElements = arrayOfElements.filter(element => !element.classList.contains('completed'));

        for (const element of otherElements) {
            element.style.display = 'flex';
        }
        for (const element of elements) {
            element.style.display = 'none';
          }
    }


    if (event.target.classList.contains('done_tab')) {
        event.target.style.color = '#3a7bfd';
        document.querySelector('.active_tab').style.color = '#777a92';
        document.querySelector('.all_tab').style.color = '#777a92';
            
        const elements = arrayOfElements.filter(element => !element.classList.contains('completed'));
        const otherElements = arrayOfElements.filter(element => element.classList.contains('completed'));
        

        for (const element of otherElements) {
            element.style.display = 'flex';
        }
        for (const element of elements) {
            element.style.display = 'none';
        }
    }
});






