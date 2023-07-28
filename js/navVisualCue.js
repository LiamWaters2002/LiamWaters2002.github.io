document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    const aboutMeSection = document.getElementById("about-me");
    const skillsSection = document.getElementById("skills");
    const projectsSection = document.getElementById("projects");
  
    const navButtons = document.querySelectorAll(".nav-buttons button");
  
    // Function to check if an element is in the viewport
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }
  
    // Function to update the active navigation button
    function updateActiveNavButton() {
      const sections = [aboutMeSection, skillsSection, projectsSection];
      const activeSectionIndex = sections.findIndex(isInViewport);
  
      navButtons.forEach((button, i) => {
        if (i === activeSectionIndex) {
          button.classList.add("active");
        } else {
          button.classList.remove("active");
        }
      });
    }
  
    // Initial check on page load
    updateActiveNavButton();
  
    // Check on scroll
    window.addEventListener("scroll", function () {
      updateActiveNavButton();
    });
  });
  