const checBox = document.querySelectorAll('.interest');
const innerList = document.querySelectorAll('.interest > ul');

Array.from(innerList).forEach((elem) => {
    const list = elem.closest('li');
    const menu = list.querySelector('.interest__check');
    const subMenu = Array.from(elem.querySelectorAll('.interest'));

    menu.addEventListener('change', function() {
        if (this.checked) {
            subMenu.forEach((elem) => {
                elem.querySelector('input').checked = true;
            });
        } else {
            subMenu.forEach((elem) => {
                elem.querySelector('input').checked = false;
            });
        };
    });
})