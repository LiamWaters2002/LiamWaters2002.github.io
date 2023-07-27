var menuIcon = document.querySelector('.menu-icon');
var dropdownMenu = document.querySelector('.dropdown-menu');
var closeMenu = document.querySelector('.menu-close-btn');


menuIcon.addEventListener('click', function() {
  dropdownMenu.classList.toggle('show');
});

closeMenu.addEventListener('click', function() {
  dropdownMenu.classList.toggle('show');
});