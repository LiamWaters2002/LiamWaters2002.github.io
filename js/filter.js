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