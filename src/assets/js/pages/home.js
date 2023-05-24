$(document).ready(function () {
  console.log('Add script for home page here')

  $('.show-content-button').click((el) => {
    showContent(el.currentTarget.dataset.content)
  })

  
// nabar hamburger effect -------------------------------------------------

document.querySelector('.hamburger-menu').addEventListener('click', function() {
  this.classList.toggle('active');
});

AOS.init({
  once: true,
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

const hamburgerIcon = document.querySelector('.hamburger-menu');
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
$(window).resize(function(){
  $('.carousel')[0].slick.refresh();
});

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


// sticky company funcion ----------------------------------------------------------

function addSelectedClassOnScroll(PrimaryRight, divClass) {
  window.addEventListener('scroll', function() {
    var primaryRightElements = document.getElementsByClassName(PrimaryRight);
    var divElements = document.getElementsByClassName(divClass);

    for (var i = 0; i < primaryRightElements.length; i++) {
      var primaryRightElement = primaryRightElements[i];
      var primaryRightTop = primaryRightElement.getBoundingClientRect().top;
      var primaryRightBottom = primaryRightElement.getBoundingClientRect().bottom;

      function removeSelectedClass() {
        var selectedElements = document.querySelectorAll('.selected');
        selectedElements.forEach(function(element) {
          element.classList.remove('selected');
        });
      }

      if (primaryRightTop >= 0 && primaryRightBottom <= window.innerHeight) {
        for (var j = 0; j < divElements.length; j++) {
          removeSelectedClass();
          divElements[j].classList.add('selected');
        }
      }
    }
  });
}

// penggunaan:
addSelectedClassOnScroll('primary-right', 'js-box-primary');
addSelectedClassOnScroll('second-right', 'js-box-second');
addSelectedClassOnScroll('third-right', 'js-box-third');

})

