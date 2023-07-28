document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");
  const aboutMeSection = document.getElementById("about-me");
  const skillsSection = document.getElementById("skills");
  const projectsSection = document.getElementById("projects");

  const navButtons = document.querySelectorAll(".nav-buttons button");
  const dropdownItems = document.querySelectorAll('.dropdown-menu a');
  let previousActiveSection = null;

  // Function to check if at least 50% of an element is in the viewport
  function isSectionInViewport(element) {
    const rect = element.getBoundingClientRect();
    const sectionHeight = rect.height;
    return rect.top >= -sectionHeight / 2 && rect.bottom <= window.innerHeight + sectionHeight / 2;
  }

  // Function to update the active navigation button
  function updateActiveNavButton() {
    const sections = [aboutMeSection, skillsSection, projectsSection];
    const activeSectionIndex = sections.findIndex(isSectionInViewport);

    // If no section is currently in view, keep the previous active section
    const newActiveSection = activeSectionIndex !== -1 ? sections[activeSectionIndex] : previousActiveSection;

    if (newActiveSection !== previousActiveSection) {
      navButtons.forEach((button, i) => {
        if (sections[i] === newActiveSection) {
          button.classList.add("active");
        } else {
          button.classList.remove("active");
        }
      });

      previousActiveSection = newActiveSection;
    }
  }

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

  // Initial check on page load
  updateActiveNavButton();

  // Check on scroll
  window.addEventListener("scroll", function () {
    updateActiveNavButton();
  });


  // Add event listener to the menu icon
  const menuIcon = document.querySelector(".menu-icon");
  menuIcon.addEventListener("click", () => {
    const dropdownMenu = document.getElementById("dropdownMenu"); // Get the dropdown menu by its id
    if (dropdownMenu.classList.contains("show")) {
      dropdownMenu.classList.remove("show");
    } else {
      dropdownMenu.classList.add("show");
    }
  });

  // Add event listener to the menu close button
  const menuCloseBtn = document.querySelector(".menu-close-btn");
  menuCloseBtn.addEventListener("click", () => {
    const dropdownMenu = document.getElementById("dropdownMenu"); // Get the dropdown menu by its id
    dropdownMenu.classList.remove("show");
  });

  // Add event listeners to the dropdown menu items
  const dropdownButtons = document.querySelectorAll("#dropdownMenu button");
  dropdownButtons.forEach(button => {
    button.addEventListener("click", () => {
      const headerText = button.textContent.trim();
      const targetHeaders = document.querySelectorAll(`main h1.section-heading`);
      targetHeaders.forEach(header => {
        if (header.textContent.trim() === headerText) {
          scrollToElement(header);
          const dropdownMenu = document.getElementById("dropdownMenu"); // Get the dropdown menu by its id
          dropdownMenu.classList.remove("show");
        }
      });
    });
  });
});