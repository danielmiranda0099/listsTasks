const d = document;
let $container = d.querySelector('.container-tasks');
let $boxDrag = null;
let tasks = [];


export function dragAndDropSortable(){

    d.addEventListener("dragstart", e => {
        if(e.target.matches('.task')){
            $boxDrag = e.target; 
            $boxDrag.classList.add('red');
            e.dataTransfer.setDragImage(new Image(), 0, 0);
        }
    });

    
    d.addEventListener("dragenter", e => {
        if(e.target.matches('.task')){
            if(e.target != $boxDrag){
                let height =  e.target.getBoundingClientRect().height / 2;
                let top = e.target.getBoundingClientRect().top;
                let puntoMedio = height + top ;
                if(e.clientY < puntoMedio){
                    $container.insertBefore(e.target,$boxDrag);
                }else{
                    $container.insertBefore($boxDrag, e.target);
                }
            }
        }
    });

    d.addEventListener("dragend", e => {
        if(e.target.matches('.task')){
            $boxDrag.classList.remove('red');
            const $tasks = d.querySelectorAll('.task');
            $tasks.forEach( el => {
                tasks.push(
                    {
                        task: el.getAttribute('data-title'),
                        color: el.getAttribute('data-color'),
                        check: el.getAttribute('data-check') == "true" ? true : false
                    }
                );
            });
            localStorage.setItem('listTasks', JSON.stringify(tasks));
            tasks = [];
        }
    });
}