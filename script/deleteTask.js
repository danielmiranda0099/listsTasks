const d = document;


export function deleteTask(){

    d.addEventListener("click", element => {
        if(element.target.matches(".delete")){

            let title = element.target.parentElement.dataset.title;

            let tasks = JSON.parse(localStorage.getItem('listTasks'));
            tasks.forEach( (element, index) => {
                if(element.task === title){
                    tasks.splice(index, 1);
                    localStorage.setItem('listTasks', JSON.stringify(tasks));
                    return;
                }
            });
    
            element.target.parentElement.remove();
        }
    });
}