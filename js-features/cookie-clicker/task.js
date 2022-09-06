const clickerCounter = document.getElementById('clicker__counter');
const img = document.getElementById('cookie');

img.onclick = () => {
    if (Number(clickerCounter.textContent) % 2 === 1) {
        img.width -= 30;
        img.height -= 30;
    } else {
        img.width += 30;
        img.height += 30;
    }
    clickerCounter.textContent = Number(clickerCounter.textContent) + 1;
}