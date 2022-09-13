let rotatorCase = Array.from(document.querySelectorAll('.rotator__case'));
let caseIndex = 0;

setInterval (() => {
    for (let i = 0; i < rotatorCase.length; i++) {
        rotatorCase[i].classList.remove('rotator__case_active');
    }
    rotatorCase[caseIndex].classList.add('rotator__case_active');
    if(caseIndex + 1 == rotatorCase.length) {
        caseIndex = 0;
    } else {
        caseIndex++;
    }
}, 1000);