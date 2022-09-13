let reveal = document.querySelectorAll('.reveal');

for(let i = 0; i < reveal.length; i++) {
    function scroll() {
        let viewportHeight = window.innerHeight;
        let revealTop = reveal[i].getBoundingClientRect().top;
        let revealBottom = reveal[i].getBoundingClientRect().bottom;
        console.log(revealTop, revealBottom);
        console.log(viewportHeight);
        if (reveal[i].classList.contains('reveal') === true && revealTop < viewportHeight) {
            reveal[i].classList.add('reveal_active');
        } else {
            reveal[i].classList.remove('reveal_active');
        }
    }
    document.addEventListener('scroll', scroll);
}