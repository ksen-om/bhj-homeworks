const links = Array.from(document.querySelectorAll('.menu__link'));

for (let link of links) {
    link.onclick = function () {
        if (link.parentElement.querySelector('.menu_sub').className === 'menu menu_sub') {
            link.parentElement.querySelector('.menu_sub').className = 'menu menu_sub menu_active';
        }else {
            link.parentElement.querySelector('.menu_sub').className = 'menu menu_sub'; 
            }
        
        if (link.closest('.menu_main')) {
            return false;
        }
    }
}