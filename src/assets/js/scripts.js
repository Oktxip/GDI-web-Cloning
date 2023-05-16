/** You can import all css in js, it will injecting a `<style>` tag
 * e.g: import '../scss/styles.scss'
 * But you should change the config in webpack.config.js
 * You can call me if you need help about this
 */

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

$(document).ready(function () {
  console.log('Welcome');

  $('.show-content-button').click((el) => {
    showContent(el.currentTarget.dataset.content)
  })
})
// nabar hamburger effect -------------------------------------------------

document.querySelector('.nav-hamburger-menu').addEventListener('click', function() {
  this.classList.toggle('active');
});


// navbar scrolled ---------------------------------------------------------

window.addEventListener('scroll', function () {
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

const hamburgerIcon = document.querySelector('.nav-hamburger-menu');
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


// slick slider -------------------------------------------------------------
$(document).ready(function () {
  $('.carousel').slick({
    arrows: true,
    infinite: false,
    dots:true,
    appendArrows: $('.carousel-arrows'),
    prevArrow:'<button class="prev"><img src="assets/media/images/chevron-left.svg"></button>',
    nextArrow:'<button class="next"><img src="assets/media/images/chevron-right.svg"></button>'
  });
});
// sidebar slider ----------------------------------------------------------

