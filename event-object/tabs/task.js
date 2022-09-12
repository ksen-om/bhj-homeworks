const tab = document.querySelectorAll('.tab');
const tabContent = document.querySelectorAll('.tab__content');

for (let i = 0; i < tab.length; i++) {
    tab[i].addEventListener('click',function() {
        for (let n = 0; n < tab.length; n++) {
            tab[n].classList.remove('tab_active');
            tabContent[n].classList.remove('tab__content_active');
        };
        tab[i].classList.add('tab_active');
        tabContent[i].classList.add('tab__content_active');
    })
}