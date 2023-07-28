document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    const aboutMeSection = document.getElementById("about-me");
    const skillsSection = document.getElementById("skills");
    const projectsSection = document.getElementById("projects");
  
    const navButtons = document.querySelectorAll(".nav-buttons button");
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
  
    // Initial check on page load
    updateActiveNavButton();
  
    // Check on scroll
    window.addEventListener("scroll", function () {
      updateActiveNavButton();
    });
  });
  