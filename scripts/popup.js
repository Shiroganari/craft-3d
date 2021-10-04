const body = document.querySelector('body');
const callButtons = document.querySelectorAll('.tel-link');
const orderButtons = document.querySelectorAll('.make-order');
const popupCall = document.getElementById('popup-call');
const popupOrder = document.getElementById('popup-order');
const popupCloseButton = document.querySelectorAll('.popup-close');

for (let i = 0; i < callButtons.length; i++) {
    callButtons[i].addEventListener('click', () => {
        popupCall.classList.add('active');
        body.classList.add('lock');
    })
}

for (let i = 0; i < orderButtons.length; i++) {
    orderButtons[i].addEventListener('click', () => {
        popupOrder.classList.add('active');
        body.classList.add('lock');
    })
}

for (let i = 0; i < popupCloseButton.length; i++) {
    popupCloseButton[i].addEventListener('click', () => {
        if (popupOrder && popupCall) {
            popupOrder.classList.remove('active');
            popupCall.classList.remove('active');
        } else if (popupOrder) {
            popupOrder.classList.remove('active');
        } else if (popupCall) {
            popupCall.classList.remove('active');
        }

        body.classList.remove('lock');
    })
}