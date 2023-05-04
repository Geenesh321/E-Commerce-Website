// Image Uploder
const uploadInput = document.getElementById('upload');
const imageContainer = document.querySelector('.image-upload-container');

uploadInput.addEventListener('change', function () {
    const file = this.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', function () {
        imageContainer.style.backgroundImage = `url(${reader.result})`;
    });

    if (file) {
        reader.readAsDataURL(file);
    }
});