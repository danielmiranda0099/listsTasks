const d = document;

export  function createTask(title, color){
    
    const $containerTasks = d.querySelector('.container-tasks');
    const $task = d.createElement('div');
    
    $task.classList.add('task');
    $task.setAttribute('data-title', title);
    $task.style.background = color;

    $task.innerHTML = ` <input type="checkbox" name="" id="">
                        <h3>${title}</h3>
                        <a class="delete">Delete</a>`;

    $containerTasks.appendChild($task);        
}