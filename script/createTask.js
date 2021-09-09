const d = document;

export  function createTask(title, color, check = false){
    
    const $containerTasks = d.querySelector('.container-tasks');
    const $task = d.createElement('div');
    
    $task.classList.add('task');
    $task.setAttribute('id', title);
    $task.setAttribute('data-title', title);
    $task.setAttribute('data-color', color);
    $task.setAttribute('data-check', check);
    $task.draggable = true;
    $task.style.background = color;

    $task.innerHTML = ` <h3 id="id-h3-${title}">${title}</h3>
                        <div class="options">
                        <input class="inputCheck" type="checkbox" name="" id="id-check ${title}">
                        <i class="far fa-trash-alt delete"></i>
                        </div>`;

    

    $containerTasks.appendChild($task); 

    if(check === true){
        let $h3 = d.getElementById(`id-h3-${title}`);
        let $check = d.getElementById(`id-check ${title}`);
        $task.style.opacity = 0.7;
        $check.checked = true;
        $h3.style.textDecoration = 'line-through';
        $h3.style.color = "gray";
    }
}