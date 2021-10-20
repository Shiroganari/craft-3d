import {createModel, animate} from './createModel.js'

const uploadSection = document.getElementById('cost-calculation-upload');
const infoSection = document.getElementById('cost-calculation-info');
const progressBarItems = document.getElementsByClassName('progress-bar__item');
const uploadButton = document.getElementById('upload-button');
const dropZone = document.querySelector('.drop-zone');
const fileInput = document.querySelector('.drop-zone__input');

uploadButton.addEventListener('click', (e) => {
    fileInput.click()
})

fileInput.addEventListener('change', (e) => {
    infoSection.classList.add('active');
    uploadSection.classList.remove('active');
    progressBarItems[1].classList.add('active');

    if (/\.(obj)$/i.test(fileInput.files[0].name) === false ) {
        alert('Not an object!');
    }
    let fileObj = fileInput.files[0];
    createModel(fileObj.name)
})

dropZone.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropZone.classList.add("drop-zone--over");
});

["dragleave", "dragend"].forEach((type) => {
    dropZone.addEventListener(type, (e) => {
    dropZone.classList.remove("drop-zone--over");
    });
});

dropZone.addEventListener('drop', (e) => {
    e.preventDefault();

    if (e.dataTransfer.files.length) {
        infoSection.classList.add('active');
        uploadSection.classList.remove('active');
        progressBarItems[1].classList.add('active');
        let fileObj = e.dataTransfer.files[0];
        
        createModel(fileObj.name)
    }

    dropZone.classList.remove("drop-zone--over");
});

