import {printListTask} from "./printListTask.js";
import {deleteTask} from "./deleteTask.js";
import {createFromForm} from "./createFromForm.js";
import {doneTask} from "./doneTask.js";


document.addEventListener("DOMContentLoaded", (e) => {

    createFromForm();
    
    printListTask();

    doneTask();

    deleteTask();

});