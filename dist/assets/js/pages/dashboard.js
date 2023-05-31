/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!******************************************!*\
  !*** ./src/assets/js/pages/dashboard.js ***!
  \******************************************/
$(document).ready(function () {
  
  function toggleSidebar() {
    var sidebarHeaders = document.querySelectorAll('.js-sidebar-check');
    
    sidebarHeaders.forEach(function(sidebarHeader) {
      sidebarHeader.classList.toggle('closed');
    });
    
    var mainDashboards = document.querySelectorAll('.js-dashboard-check');

    mainDashboards.forEach(function(mainDashboard) {
      mainDashboard.classList.toggle('close-main-dashboard');
    });
  }

  var button = document.getElementById('btn-sidebar-toggle')
  button.addEventListener("click", toggleSidebar)

  $('.latest-reports__carousel').slick({
    
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    appendDots: $('.slick_pagination'),
    infinite: false
  });

  function toggleDropdown() {
    var dropdownContents = document.querySelectorAll("#dropdown-content");
    dropdownContents.forEach(function(element) {
      element.classList.toggle("open");
    });
  }
  
  var dropdown = document.querySelector(".js-dropdown");
  dropdown.addEventListener("click", toggleDropdown);
  
  function tester() {
    var dropdownContent = document.getElementById("dropdown-content");
    var btnSidebarToggle = document.getElementById("btn-sidebar-toggle");
  
    if (dropdownContent.classList.contains("closed")) {
      btnSidebarToggle.click();
    }
  }
  
  var dropdownContent = document.getElementById("dropdown-content");
  dropdownContent.addEventListener("click", tester);
  
  
})

/******/ })()
;
//# sourceMappingURL=dashboard.js.map