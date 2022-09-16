const hasTooltip = document.querySelectorAll('.has-tooltip');

function tooltip(event) {
    const tooltipAct = document.getElementsByClassName('tooltip_active')[0];
    event.preventDefault();
    if (tooltipAct !== undefined) {
        tooltipAct.classList.remove('tooltip_active');
        if (tooltipAct.textContent == this.title) {
            return false;
        }
    }
    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip', 'tooltip_active');
    tooltip.textContent = this.getAttribute('title');
    const position = this.getBoundingClientRect();
    tooltip.style.top = `${position.bottom + 5}px`;
    tooltip.style.left = `${position.left + 20}px`;  
    document.body.append(tooltip);
}

for (i of hasTooltip) {
    i.addEventListener('click', tooltip);
}