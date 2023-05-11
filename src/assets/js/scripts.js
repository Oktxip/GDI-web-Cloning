/** You can import all css in js, it will injecting a `<style>` tag
 * e.g: import '../scss/styles.scss'
 * But you should change the config in webpack.config.js
 * You can call me if you need help about this
 */

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// Import jQuery
import * as $ from 'jquery'

$(document).ready(function () {
  console.log('Welcome');

  $('.show-content-button').click((el) => {
    showContent(el.currentTarget.dataset.content)
  })
})

// navbar scrolled ---------------------------------------------------------

window.addEventListener('scroll', function() {
  var header = document.getElementById('header');
  const scrollPosition = window.scrollY || window.pageYOffset;
  if (window.scrollY > 0) {
    header.classList.remove('position-zero');
    header.classList.add('position-scrolled');
  } else {
    header.classList.remove('position-scrolled');
    header.classList.add('position-zero');
  }
});

// hamburger navigation ---------------------------------------------------------

const hamburgerIcon = document.querySelector('.hamburger-icon');
const navMenu = document.querySelector('.navigation');

hamburgerIcon.addEventListener('click', () => {
  navMenu.classList.toggle('navigation-active');
});


// feature switch -----------------------------------------------------------------
  function showContent(contentId) {
    // Hide all content
    const contents = document.getElementsByClassName("js-ctn");
    for (let i = 0; i < contents.length; i++) {
      contents[i].classList.remove("on");
    }

    // Show selected content
    const content = document.getElementById(contentId);
    content.classList.add("on");

    // Set on button
    const buttons = document.getElementsByTagName("button");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove("on");
    }
    
    
    const onButton = document.querySelector(`.show-content-button[data-content="${contentId}"]`);
    onButton.classList.add("on");
  }

// slider cs --------------------------------------------------------------------

const carousel = document.querySelector('.carousel');
const carouselContainer = document.querySelector('.carousel-container');
const carouselItems = document.querySelectorAll('.carousel-item');
const carouselBullets = document.querySelector('.carousel-bullets');

// Initialize variables
let currentSlide = 0;
let intervalId;

// Create bullets
carouselItems.forEach((item, index) => {
  const bullet = document.createElement('button');
  bullet.classList.add('bullet');
  if (index === 0) {
    bullet.classList.add('active');
  }
  bullet.addEventListener('click', () => {
    clearInterval(intervalId);
    goToSlide(index);
  });
  carouselBullets.appendChild(bullet);
});

// Go to a specific slide
function goToSlide(slideIndex) {
  carouselItems[currentSlide].classList.remove('active');
  carouselBullets.childNodes[currentSlide].classList.remove('active');
  carouselItems[slideIndex].classList.add('active');
  carouselBullets.childNodes[slideIndex].classList.add('active');
  currentSlide = slideIndex;
}

// Next slide
function nextSlide() {
  clearInterval(intervalId);
  const nextSlideIndex = currentSlide + 1 >= carouselItems.length ? 0 : currentSlide + 1;
  goToSlide(nextSlideIndex);
}

// Previous slide
function prevSlide() {
  clearInterval(intervalId);
  const prevSlideIndex = currentSlide - 1 < 0 ? carouselItems.length - 1 : currentSlide - 1;
  goToSlide(prevSlideIndex);
}

// Set interval for auto slide
intervalId = setInterval(() => {
  nextSlide();
}, 5000);

// Event listeners for arrow buttons
document.querySelector('.carousel-prev').addEventListener('click', prevSlide);
document.querySelector('.carousel-next').addEventListener('click', nextSlide);

// slick slider -------------------------------------------------------------
// sidebar slider ----------------------------------------------------------

