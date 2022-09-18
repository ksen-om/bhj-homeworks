const item = Array.from(document.querySelectorAll('.menu__item'));

for (let i = 0; i < item.length; i ++) {
    if (item[i].querySelector('.menu_sub')) {
        item[i].querySelector('.menu__link').onclick = function() {
        item[i].querySelector('.menu_sub').classList.toggle('menu_active');
        return false;
        } 
        }
    }
