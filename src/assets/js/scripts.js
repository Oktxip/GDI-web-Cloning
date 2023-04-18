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



