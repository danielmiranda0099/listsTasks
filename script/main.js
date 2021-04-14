import {printListTask} from "./printListTask.js";
import {deleteTask} from "./deleteTask.js";
import {createFromForm} from "./createFromForm.js";


document.addEventListener("DOMContentLoaded", (e) => {

    createFromForm();
    
    printListTask();

    deleteTask();

});