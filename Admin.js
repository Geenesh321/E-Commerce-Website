// Admin Table
const deleteButtons = document.querySelectorAll('.delete-btn');
deleteButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const row = event.target.closest('tr');
    const confirmDelete = confirm('Are you sure you want to delete this product?');
    if (confirmDelete) {
      row.remove();
    }
  });
});

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



