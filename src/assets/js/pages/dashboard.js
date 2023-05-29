$(document).ready(function () {
  
  function toggleStars() {
    starDashboard.classList.toggle('active');
  }
  var bookmarkStars = document.getElementById('js-bookmark-link')
  bookmarkStars.addEventListener("click", toggleStars)


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
})

$('.latest-reports__carousel').slick({
  
  slidesToShow: 2,
  slidesToScroll: 1,
  dots: true,
  appendDots: $('.slick_pagination'),
  infinite: false
});