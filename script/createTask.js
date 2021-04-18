const d = document;

export  function createTask(title, color, check = false){
    
    const $containerTasks = d.querySelector('.container-tasks');
    const $task = d.createElement('div');
    
    $task.classList.add('task');
    $task.setAttribute('id', title);
    $task.setAttribute('data-title', title);
    $task.style.background = color;

    $task.innerHTML = ` <input class="inputCheck" type="checkbox" name="" id="id-check ${title}">
                        <h3 id="id-h3-${title}">${title}</h3>
                        <a class="delete">Delete</a>`;

    

    $containerTasks.appendChild($task); 

    if(check){
        let $h3 = d.getElementById(`id-h3-${title}`);
        let $check = d.getElementById(`id-check ${title}`);
        $task.style.opacity = 0.7;
        $check.checked = true;
        console.log($h3);
        $h3.style.textDecoration = 'line-through';
    }
}