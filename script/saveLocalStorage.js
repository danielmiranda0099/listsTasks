const listTasks = [];

export function saveLocalStorage(task, color, check){
    
    if(localStorage.getItem('listTasks') === null){
        listTasks.push(
            {
                task,
                color,
                check
            }
        );
        localStorage.setItem('listTasks', JSON.stringify(listTasks));
    }else{
        let listTasks = JSON.parse(localStorage.getItem('listTasks'));
        listTasks.push(
            {
                task,
                color,
                check
            });
        localStorage.setItem('listTasks', JSON.stringify(listTasks));
    }
}