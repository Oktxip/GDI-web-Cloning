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

