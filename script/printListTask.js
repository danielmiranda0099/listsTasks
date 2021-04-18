import {createTask} from "./createTask.js"

let tasks = [];

export function printListTask(){
    if(localStorage.getItem('listTasks')){
        tasks = JSON.parse(localStorage.getItem('listTasks'));
        tasks.forEach(element => {
            createTask(element.task, element.color, element.check);
        })  
    }
}