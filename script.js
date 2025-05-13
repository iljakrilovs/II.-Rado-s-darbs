const images = ['group.png.JPG', 'bachata.png.avif', 'breakdance.png'];
let current = 0;
const sliderImage = document.querySelector('.slider-image');

document.querySelector('.slider-arrow.left').addEventListener('click', () => {
    current = (current - 1 + images.length) % images.length;
    sliderImage.src = images[current];
});
  
document.querySelector('.slider-arrow.right').addEventListener('click', () => {
    current = (current + 1) % images.length;
    sliderImage.src = images[current];
});