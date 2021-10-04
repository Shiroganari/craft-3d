const orderRange = document.getElementById('cost-calculation-info__range');
const percent = document.getElementById('percent');
const productQuantity = document.getElementById('product-quantity');
const quantityDown = document.getElementById('quantity-down');
const quantityUp = document.getElementById('quantity-up');
const diameterButtons = document.getElementsByClassName('cost-calculation-info__diameter');
const technologyButtons = document.getElementsByClassName('cost-calculation-info__technology');
let currentQuantity = +productQuantity.value;


orderRange.addEventListener('mousemove', () => {
    percent.innerHTML = orderRange.valueAsNumber + '%';
    const left = (((orderRange.value - orderRange.min) / (orderRange.max  - orderRange.min)) * ((orderRange.clientWidth - 5) - 5) + 5);
    percent.style.left = left + 'px';
})

productQuantity.addEventListener('change', () => {
    currentQuantity = +productQuantity.value;
})

quantityDown.addEventListener('click', () => {
    currentQuantity--;

    if (currentQuantity < 1) {
        currentQuantity = 1;
    }

    productQuantity.value = currentQuantity;
})

quantityUp.addEventListener('click', () => {
    currentQuantity++;

    if (currentQuantity > 100) {
        currentQuantity = 100;
    }

    productQuantity.value = currentQuantity;
})

for (let i = 0; i < diameterButtons.length; i++) {
    diameterButtons[i].addEventListener('click', () => {
        for (let j = 0; j < diameterButtons.length; j++) {
            diameterButtons[j].setAttribute('data-radio', '0');
        }

        diameterButtons[i].setAttribute('data-radio', '1');
    })
}

for (let i = 0; i < technologyButtons.length; i++) {
    technologyButtons[i].addEventListener('click', () => {
        for (let j = 0; j < technologyButtons.length; j++) {
            technologyButtons[j].setAttribute('data-radio', '0');
        }

        technologyButtons[i].setAttribute('data-radio', '1');
    })
}