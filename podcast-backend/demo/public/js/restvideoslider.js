const slider = document.querySelector('.slider');
let isDragging = false;
let startPosition = 0;
let currentTranslate = 0;
let prevTranslate = 0;

slider.addEventListener('touchstart', touchStart);
slider.addEventListener('touchmove', touchMove);
slider.addEventListener('touchend', touchEnd);
slider.addEventListener('touchcancel', touchEnd);

function touchStart(event) {
  startPosition = event.touches[0].clientX;
  isDragging = true;
}

function touchMove(event) {
  if (!isDragging) return;
  const currentPosition = event.touches[0].clientX;
  currentTranslate = prevTranslate + currentPosition - startPosition;
}

function touchEnd() {
  isDragging = false;
  prevTranslate = currentTranslate;
}

function updateSliderPosition() {
  slider.style.transform = `translateX(${currentTranslate}px)`;
}
