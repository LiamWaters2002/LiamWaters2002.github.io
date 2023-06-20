var menuIcon = document.querySelector('.menu-icon');
var dropdownMenu = document.querySelector('.dropdown-menu');

menuIcon.addEventListener('click', function() {
  dropdownMenu.classList.toggle('show');
});