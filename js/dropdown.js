var menuIcon = document.querySelector('.menu-icon');
var dropdownMenu = document.querySelector('.dropdown-menu');
var closeMenu = document.querySelector('.menu-close-btn');
var dropDownMenuItems = document.querySelectorAll('.dropdown-menu li a');

menuIcon.addEventListener('click', function() {
  dropdownMenu.classList.toggle('show');
});

closeMenu.addEventListener('click', function() {
  dropdownMenu.classList.toggle('show');
});

// Add event listener to each drop-down menu item
dropDownMenuItems.forEach(function(item) {
  item.addEventListener('click', function() {
    dropdownMenu.classList.toggle('show');
  });
});
