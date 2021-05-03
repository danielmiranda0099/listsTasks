
const d = document;
const $containerTask = d.querySelector('.container-tasks');
const $message = d.createElement('div');
const $form = d.querySelector('.form');
$message.classList.add('message');

$message.innerHTML = '<h3>THE TASK EXISTS</h3> <i class="fas fa-times closeMessage"></i>'


export function alertMessage(){
    $containerTask.insertAdjacentElement('afterbegin', $message);
    $form.reset();

    setTimeout(() => {
        $message.remove();
    },2000);

    d.addEventListener("click", e => {
        if(e.target.matches('.closeMessage')){
            $message.remove();
        }
    });
}