// Selection all required elements
const dropArea = document.querySelector('.drag-area');
const stepsContent = document.querySelector('.order__body');
const firstStep = document.querySelector('.order__body--upload');
const secondStep = document.querySelector('.order__body--info');

let file;

dropArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    console.log('File is over DragArea')
});

dropArea.addEventListener('dragleave', () => {
    console.log('File is outside from DragArea')
});

dropArea.addEventListener('drop', (e) => {
    e.preventDefault();
    file = e.dataTransfer.files[0];
    firstStep.classList.remove('active');
    secondStep.classList.add('active');
});