var slider = new Swiper('.trending-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: false,
  slidesPerView: getSlidesPerView(), // Set initial slidesPerView value
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 0,
    modifier: 1,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

var cards = document.querySelectorAll('.swiper-slide');
const checkboxes = document.querySelectorAll('.filter-checkbox input[type="checkbox"]');
var sliderNumber = document.querySelector('.slider-number');
var totalSlides = 0; // Declare totalSlides at a higher scope

// Helper function to determine the appropriate slidesPerView value based on the window width
function getSlidesPerView() {
  if (window.innerWidth < 500) {
    return 1; // Set to 1 slide when viewport width is below 500 pixels
  }
  return 3; // Default value of 3 slides
}

// Function to update the slidesPerView value based on the window width
function updateSlidesPerView() {
  slider.params.slidesPerView = getSlidesPerView();
  slider.update();
}

// Update slidesPerView on window resize
window.addEventListener('resize', updateSlidesPerView);

function updateCardVisibility() {
  const enabledFilters = Array.from(checkboxes)
    .filter(checkbox => checkbox.checked)
    .map(checkbox => checkbox.parentNode.querySelector('.checkbox-text').textContent.trim());

  var visibleSlides = Array.from(cards).filter((card) => {
    const cardType = card.dataset.cardtype;
    const isFilterSelected = enabledFilters.includes(cardType);
    return isFilterSelected;
  });

  // Update the totalSlides based on the visible slides
  totalSlides = visibleSlides.length;
  console.log("totalSlides = " + totalSlides);

  // Update the slider number element
  if (sliderNumber) {
    var currentIndex = slider.realIndex + 1;
    sliderNumber.textContent = currentIndex + ' / ' + totalSlides;
  }

  cards.forEach((card) => {
    const isSlideVisible = visibleSlides.includes(card);
    card.style.display = isSlideVisible ? 'block' : 'none';
  });

  slider.update(); // Refresh the slider

  // Reset the active slide to the first one
  // slider.slideTo(0);
}

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('click', updateCardVisibility);
});

slider.on('slideChange', function () {
  var currentIndex = slider.realIndex + 1;
  if (sliderNumber) {
    sliderNumber.textContent = currentIndex + ' / ' + totalSlides;
  }
});

slider.emit('slideChange');

// Initial update to set the correct number of slides
updateCardVisibility();

// Function to handle the "Enable All" button click event
function enableAllFilters() {
  checkboxes.forEach((checkbox) => {
    checkbox.checked = true;
  });
  updateCardVisibility();
}

// Function to handle the "Disable All" button click event
function disableAllFilters() {
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });
  updateCardVisibility();
}

// Add event listeners for the "Enable All" and "Disable All" buttons
const enableAllButton = document.querySelector('.enable-all-button');
const disableAllButton = document.querySelector('.disable-all-button');

if (enableAllButton) {
  enableAllButton.addEventListener('click', enableAllFilters);
}

if (disableAllButton) {
  disableAllButton.addEventListener('click', disableAllFilters);
}
