const cartProducts = document.querySelector('.cart__products');
const product = document.querySelectorAll('.product');
let arr = [...product].map((item) => item.getAttribute('data-id'));

getInfoAboutProduct = (item) => {
    const productControls = item.querySelector('.product__controls');
    const productQuantityValue = productControls.querySelector('.product__quantity-value');
    const productQuantityControl= item.querySelectorAll('.product__quantity-control');
    
productQuantityControl.forEach(item => {
    item.addEventListener('click', (e) => {
        if (e.target.classList.contains('product__quantity-control_dec')) {
            if (productQuantityValue.textContent > 1) {
                productQuantityValue.innerHTML = productQuantityValue.textContent - 1;
        } 
    } else {
            productQuantityValue.innerHTML = +productQuantityValue.textContent + 1;
        }
    });
});

const productAdd = productControls.querySelector('.product__add');
productAdd.addEventListener ('click', () => {
    const imgs = item.querySelector('.product__image').src;
    const dataId = item.getAttribute('data-id');
    const div = document.createElement('div');
    div.setAttribute('id', dataId);
    div.classList.add('cart__product');

        div.innerHTML = `<img class='cart__product-image' src='${imgs}'>
        <div class='cart__product-count'>${productQuantityValue.textContent}</div>`;

const idRenderElem = arr.find(item => item === dataId);
if (document.getElementById(idRenderElem)) {
    const foundElem = document.getElementById(idRenderElem);
    const prevElem = foundElem.querySelector('.cart__product-count').textContent;
    foundElem.querySelector('.cart__product-count').innerHTML = +productQuantityValue.textContent + +prevElem;
} else {
    cartProducts.appendChild(div);
    }
});
};

product.forEach((el) => {
    getInfoAboutProduct(el);
});
