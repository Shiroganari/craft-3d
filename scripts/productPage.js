$(document).ready(function(){
    $('.product-pictures').slick({
        arrows: true,
        infinite: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
    });

    const materialButtons = document.getElementsByClassName('product-item__material');

    for (let i = 0; i < materialButtons.length; i++) {
        materialButtons[i].addEventListener('click', () => {
            for (let j = 0; j < materialButtons.length; j++) {
                materialButtons[j].setAttribute('data-radio', '0');
            }

            materialButtons[i].setAttribute('data-radio', '1');
        })
    }
});