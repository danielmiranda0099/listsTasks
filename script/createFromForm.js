import {createTask} from "./createTask.js";
import {saveLocalStorage} from "./saveLocalStorage.js";

const d = document;

export function createFromForm(){

    d.addEventListener("submit", function(e){
        if(e.target.matches(".form")){
            const $form = d.querySelector('.form');

            const title = d.getElementById("title").value;
            const $inputColor = d.querySelector('input[name="color"]:checked');
            let color = '';

            if($inputColor){
                color = $inputColor.value;
            }else{
                color = '#64b5f6'; //default color
            }

            createTask(title, color);
            saveLocalStorage(title, color);
            $form.reset();
        }

        e.preventDefault(); 
    });
}
