const input = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list-container');

addBtn.addEventListener('click', function() {
    if(!input.value)
        alert("Please add any task");
    else {
        const newTask = `<div class="task" id="task">
        <span>${input.value}</span>
        <div class="buttons">
            <i class="fa-sharp fa-solid fa-check"></i>
            <i class="fa-solid fa-trash-can"></i>
        </div>
    </div>`
    taskList.innerHTML += newTask;
    }
    input.value = "";

    const addedTasksDelete = document.getElementsByClassName('fa-trash-can');
    for(let i = 0; i < addedTasksDelete.length; i++) {
        addedTasksDelete[i].onclick = function() {
            this.parentNode.parentNode.remove();
        }
    }

     const addedTasksDone = document.getElementsByClassName('fa-check');
     for(let i = 0; i < addedTasksDone.length; i++) {
         addedTasksDone[i].onclick = function() {
             this.parentNode.previousElementSibling.style.textDecoration = 'line-through';
         }
    }
});