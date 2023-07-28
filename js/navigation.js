// Function to scroll to the specified element
function scrollToElement(element) {
    const fixedHeaderHeight = 100; // Replace with the actual height of your fixed header if you have one
    const offset = element.offsetTop - fixedHeaderHeight;
    window.scroll({
      top: offset,
      behavior: 'smooth'
    });
  }
  
  // Add event listeners to the navigation buttons
  const navButtons = document.querySelectorAll('.nav-buttons button');
  navButtons.forEach(button => {
    button.addEventListener('click', () => {
      const headerText = button.textContent.trim();
      const targetHeaders = document.querySelectorAll(`main h1.section-heading`);
      targetHeaders.forEach(header => {
        if (header.textContent.trim() === headerText) {
          scrollToElement(header);
        }
      });
    });
  });
  
  // Add event listeners to the dropdown menu items
  const dropdownItems = document.querySelectorAll('.dropdown-menu a');
  dropdownItems.forEach(item => {
    item.addEventListener('click', () => {
      const headerText = item.textContent.trim();
      const targetHeaders = document.querySelectorAll(`main h1.section-heading`);
      targetHeaders.forEach(header => {
        if (header.textContent.trim() === headerText) {
          scrollToElement(header);
        }
      });
    });
  });
  