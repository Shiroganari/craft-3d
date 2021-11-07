import {createModel} from './createModel.js'

const uploadSection = document.getElementById('cost-calculation-upload');
const infoSection = document.getElementById('cost-calculation-info');
const progressBarItems = document.getElementsByClassName('progress-bar__item');
const uploadButton = document.getElementById('upload-button');
const uploadProgress = document.getElementById('upload-progress');
const uploadProgressWrapper = document.getElementById('upload-progress__wrapper');
const uploadProgressFill = document.getElementById('upload-progress__fill');
const dropZone = document.getElementById('drop-zone');
const fileInput = document.querySelector('.drop-zone__input');

uploadButton.addEventListener('click', (e) => {
    e.preventDefault();
    fileInput.click();
})

fileInput.addEventListener('change', (e) => {
    let fileObj = fileInput.files[0];
    dropZone.style.display = 'none';
    uploadFile(fileObj);
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
        let fileObj = e.dataTransfer.files[0];
        
        uploadFile(fileObj);
    }

    dropZone.classList.remove("drop-zone--over");
});

function uploadFile(file) {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "upload.php");
    uploadProgress.style.display = 'flex';
    xhr.upload.addEventListener("progress", ({loaded, total}) => {
        let fileLoaded = Math.floor((loaded / total) * 100);
        let fileTotal = Math.floor(total / 1000);
        let fileSize;
        (fileTotal < 1024) ? fileSize = fileTotal + " KB" : fileSize = (loaded / (1024*1024)).toFixed(2) + " MB";

        uploadProgressFill.style.width = fileLoaded + '%';
        if (fileLoaded > 10) {
            uploadProgressFill.innerHTML = fileLoaded + '%';
        }

        if (loaded == total) {
            uploadSection.classList.remove('active');
            infoSection.classList.add('active');
            progressBarItems[1].classList.add('active');
            createModel(file.name);
        }
    });

    let data = new FormData(dropZone);
    xhr.send(data);
}