const btn = document.querySelector('.dropdown');
const dropMenu = [...document.querySelectorAll('.dropdown__link')];
const showValue = document.querySelector('.dropdown__value');

btn.addEventListener('click', function () {
    this.querySelector('ul').classList.toggle('dropdown__list_active')
});
dropMenu.forEach(element => {
    element.onclick = function() {
        showValue.textContent = this.textContent;
        return false;
    }
})