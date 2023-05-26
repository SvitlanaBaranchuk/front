// Зберігаємо всі зображення в масиві
var images = document.querySelectorAll('.gallery img');
var imageIndex = 0; 

var modal = document.querySelector('.modal');
var modalImg = document.querySelector('.modal-img');
var prevButton = document.querySelector('.prev-button');
var nextButton = document.querySelector('.next-button');
var closeButton = document.querySelector('.close-button');

function showImage(imgElement) {
  var src = imgElement.src;
  imageIndex = Array.from(images).indexOf(imgElement); 
  modalImg.src = src;
  modal.classList.add('open');
}

function changeImage(indexOffset) {
  imageIndex += indexOffset;
  if (imageIndex < 0) {
    imageIndex = images.length - 1;
  } else if (imageIndex >= images.length) {
    imageIndex = 0;
  }
  modalImg.src = images[imageIndex].src;
}

prevButton.addEventListener('click', function() {
  changeImage(-1);
});

nextButton.addEventListener('click', function() {
  changeImage(1);
});

closeButton.addEventListener('click', function() {
  modal.classList.remove('open');
});

modal.addEventListener('click', function(e) {
  if (e.target === modal) {
    modal.classList.remove('open');
  }
});

images.forEach(function(image) {
  image.addEventListener('click', function() {
  showImage(this);
});
});
