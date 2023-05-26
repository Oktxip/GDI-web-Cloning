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
})

