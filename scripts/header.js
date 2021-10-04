$(document).ready(function(){

    // Закрепление header на верху странички при скролле
    let header = document.getElementById('header');

    window.onscroll = function() {
        if (window.pageYOffset >= 0) {
            header.classList.add('sticky')
        } else {
            header.classList.remove('sticky');
        }
    }

    // Кнопка в header
    let toggleButton = document.getElementById('toggle-button');
    toggleButton.addEventListener('click', function() {
        nav.classList.toggle('show');
        toggleButton.classList.toggle('active');
        document.body.classList.toggle('lock');
    });
});