const checkboxes = document.querySelectorAll('.filter-checkbox input[type="checkbox"]');

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', () => {
    const parentCheckbox = checkbox.parentNode;

    if (checkbox.checked) {
      parentCheckbox.classList.add('enabled');
      parentCheckbox.classList.remove('disabled');
    } else {
      parentCheckbox.classList.remove('enabled');
      parentCheckbox.classList.add('disabled');
    }
  });
});

const sliderCards = document.querySelectorAll('.swiper-slide');


function updateCardVisibility() {
    const enabledFilters = Array.from(checkboxes)
      .filter(checkbox => checkbox.checked)
      .map(checkbox => checkbox.parentNode.querySelector('.checkbox-text').textContent.trim());
  
    sliderCards.forEach((card) => {
      const cardType = card.dataset.cardtype;
  
      const isFilterSelected = enabledFilters.includes(cardType);
  
      if (isFilterSelected) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }
  
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('click', updateCardVisibility);
  });