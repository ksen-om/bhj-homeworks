function clickFound() {
    document.onclick = function(e) {
        let clickClass = e.target.className;
        clickFunc(clickClass);
    }
}

function clickFunc (object) {
    const pic = Array.from(document.getElementsByClassName('slider__items')[0].children);
    let picIndex = pic.findIndex(callback);
    pic[picIndex].className = 'slider__item';

    if (object == 'slider__arrow slider__arrow_prev') {
        picIndex = picIndex > 0 ? picIndex -= 1 : picIndex = pic.length - 1;
    }
    if (object == 'slider__arrow slider__arrow_next') {
        picIndex = picIndex < pic.length - 1 ? picIndex += 1 : picIndex = 0;
    }
    pic[picIndex].className = 'slider__item slider__item_active';
}

function callback(item) {
    return item.className == 'slider__item slider__item_active';
}

clickFound()