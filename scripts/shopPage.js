let categoriesChoises = document.getElementsByClassName('shop-categories__choise');
let categoriesItem = document.getElementsByClassName('shop-categories__item');

for (let i = 0; i < categoriesChoises.length; i++) {
    let arrow = categoriesChoises[i].firstElementChild;

    arrow.addEventListener('click', function() {
        arrow.classList.toggle('active');
        arrow.parentElement.nextElementSibling.classList.toggle('active');
    });
}