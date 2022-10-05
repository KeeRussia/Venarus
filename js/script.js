// Burger-button
const burgerButton = document.querySelector('.burger-button');
const sideMenu = document.querySelector('.side-menu');
const sideLink = document.querySelectorAll('.side-menu__link');
const navMap = document.querySelector('.navigation__map');
const navSearch = document.querySelector('.navigation__search');

burgerButton.onclick = function() {
  burgerButton.classList.toggle('active-button');
  sideMenu.classList.toggle('active-menu');
  navMap.classList.toggle('hidden-button');
  navSearch.classList.toggle('hidden-button');
};

// Закрытие при нажатии на ссылку
// sideLink.onclick = function() {
//   console.log(sideLink);
//   burgerButton.classList.remove('active-button');
//   sideMenu.classList.remove('active-menu');
//   navMap.classList.remove('hidden-button');
//   navSearch.classList.remove('hidden-button');
// };



// Самый верхний слайдер

//Для маленьких экранов
function getWindowWidth() {  
  return window.innerWidth || document.body.clientWidth;
}

if (getWindowWidth() <= 767) {
  let offset = 0; //Смещение от левого края
  const sliderLine = document.querySelector('.slider-line');
  const sliderNext = document.querySelector('.slider-next');
  const sliderPrev = document.querySelector('.slider-prev');
  
  sliderPrev.addEventListener('click', function(){
    offset = offset - 264; 
    sliderNext.disabled = false;
    if (offset < 0) {
      offset = 0;
      sliderPrev.disabled = true;
    }
    sliderLine.style.left = -offset + 'px';
  })
  
  sliderNext.addEventListener('click', function(){
    offset = offset + 264; 
    sliderPrev.disabled = false;
    if (offset > 568) {
      offset = 528;
      sliderNext.disabled = true;
    } 
    sliderLine.style.left = -offset + 'px';
  })
} else { //Для больших экранов
  const sliderNext = document.querySelector('.slider-next');
  const sliderPrev = document.querySelector('.slider-prev');
  

  function rotate() {
    let slides = document.querySelectorAll('.slide');
    for (i=0; i<slides.length; i++) {
      if (slides[i].classList.contains('active-item')) {
        slides[i].classList.remove('active-item')
        slides[i].classList.add('left-item');
      } else if (slides[i].classList.contains('left-item')) {
        slides[i].classList.remove('left-item');
        slides[i].classList.add('right-item');
      } else if (slides[i].classList.contains('right-item')) {
        slides[i].classList.remove('right-item');
        slides[i].classList.add('active-item');
      } else if (slides[i].classList.contains('right-item-reverse')) {
        slides[i].classList.remove('right-item-reverse');
        slides[i].classList.add('right-item');
      } else if (slides[i].classList.contains('left-item-reverse')) {
        slides[i].classList.remove('left-item-reverse');
        slides[i].classList.add('left-item');
      } else {
        slides[i].classList.remove('active-item-reverse');
        slides[i].classList.add('active-item');
      }
    }}
    function rotateBackwards() {
      let slides = document.querySelectorAll('.slide');
      for (i=0; i<slides.length; i++) {
        if (slides[i].classList.contains('active-item')) {
          slides[i].classList.remove('active-item')
          slides[i].classList.add('active-item-reverse');
        } else if (slides[i].classList.contains('left-item')) {
          slides[i].classList.remove('left-item');
          slides[i].classList.add('left-item-reverse');
        } else if (slides[i].classList.contains('right-item')) {
          slides[i].classList.remove('right-item');
          slides[i].classList.add('right-item-reverse');
        } else if (slides[i].classList.contains('right-item-reverse')) {
          slides[i].classList.remove('right-item-reverse');
          slides[i].classList.add('left-item-reverse');
        } else if (slides[i].classList.contains('left-item-reverse')) {
          slides[i].classList.remove('left-item-reverse');
          slides[i].classList.add('active-item-reverse');
        } else if (slides[i].classList.contains('active-item-reverse')) {
          slides[i].classList.remove('active-item-reverse');
          slides[i].classList.add('right-item-reverse');
        }
      }}
    sliderNext.onclick = rotate;
    sliderPrev.onclick = rotateBackwards;
  }
  



// let slides = document.querySelectorAll('.slide');
// console.log(slides);
// let slider = [];
// for (let i = 0; i < slides.length; i++) {
//   slider[i] = slides[i].src;
//   slides[i].remove();
// }
// console.log(slider);

// let step = 0;
// let offset = 0;

// function draw() {
//   let img = document.createElement('img');
//   img.src = slider[step];
//   img.classList.add('slide');
//   img.style.left = offset*264 + 'px';
//   document.querySelector('.slider-line').appendChild(img);
//   if (step + 1 == slider.length) {
//     step = 0;
//   } else {
//     step ++;
//   }
//   offset = 1;
// }

// function left() {
//   nextButton.onclick = null;
//   let slides2 = document.querySelectorAll('.slide');
//   let offset2 = 0;
//   for (let i = 0; i < slides2.length; i++) {
//     slides2[i].style.left = offset2*264 - 264 + 'px';
//     offset2++;
//   }
//   setTimeout(function() {
//     slides2[0].remove();
//     draw();
//     nextButton.onclick = left;
//   }, 1000
//   );
// }

// draw();draw();


// let prevButton = document.querySelector('.slider-prev');
// let nextButton = document.querySelector('.slider-next');

// nextButton.onclick = left;
// prevButton.onclick = right;