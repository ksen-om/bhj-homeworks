const modalMain = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');
modalMain.classList.add('modal_active');


const modalClose = Array.from(document.querySelectorAll('.modal__close'));
modalClose.forEach((element) => {
    element.addEventListener('click', () => {
        modalMain.classList.remove('modal_active');
        modalSuccess.classList.remove('modal_active');
    })
})

const btn = document.querySelector('.show-success');
btn.addEventListener('click', () => {
    modalSuccess.classList.add('modal_active');
})
