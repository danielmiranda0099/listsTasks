import {createTask} from "./createTask.js";
import {saveLocalStorage} from "./saveLocalStorage.js";

const d = document;

export function createFromForm(){

    d.addEventListener("submit", function(e){
        e.preventDefault(); 
        if(e.target.matches(".form")){
            const $form = d.querySelector('.form');

            const title = d.getElementById("title").value;
            const $inputColor = d.querySelector('input[name="color"]:checked');
            let color = '';

            const tasks = JSON.parse(localStorage.getItem('listTasks'));

            function checkTask(tasks, task){
                for(let i=0; i < tasks.length; i++){
                    if(tasks[i].task === task) return true;
                }
                return false;
            }

            const isTask = checkTask(tasks, title);

            if(isTask) return;

            if($inputColor){
                color = $inputColor.value;
            }else{
                color = '#64b5f6'; //default color
            }

            createTask(title, color);
            saveLocalStorage(title, color, false);
            $form.reset();
        }
    });
}
