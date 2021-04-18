import {printListTask} from "./printListTask.js";

const d = document;
const $containerTasks = d.querySelector('.container-tasks');

export function doneTask(){

    d.addEventListener("click", (e) => {
        if(e.target.matches(".inputCheck")){
            let $check = e.target;

            let tasks = JSON.parse(localStorage.getItem('listTasks'));
            tasks.forEach((el) => {
                if(el.task == e.target.parentElement.getAttribute('id')){
                    el.check = $check.checked;
                    localStorage.setItem('listTasks', JSON.stringify(tasks));
                    while($containerTasks.firstChild){
                        $containerTasks.removeChild($containerTasks.firstChild);
                    }
                    printListTask();
                    return;
                }
            });
        }
    });

}

