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
  }

  var button = document.getElementById('btn-sidebar-toggle')
  button.addEventListener("click", toggleSidebar)
})


/******/ })()
;
//# sourceMappingURL=dashboard.js.map