document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.trending-slide');
    const modal = document.getElementById('modal');
    const modalIframe = document.getElementById('modal-iframe');
    const modalClose = document.getElementById('modal-close');
  
    cards.forEach(card => {
      card.addEventListener('click', () => {
        const pageUrl = card.getAttribute('data-page');
        if (pageUrl) {
          // Set the URL to the iframe inside the modal
          modalIframe.src = pageUrl;
          // Show the modal
          modal.style.display = 'block';
          // Hide the overflow of the entire document when modal is open
          document.body.style.overflow = 'hidden';
        }
      });
    });
  
    function closeModal() {
      // Close the modal
      modal.style.display = 'none';
      // Restore the overflow of the entire document
      document.body.style.overflow = 'auto';
    }
  
    // Close the modal when clicking on the close button
    modalClose.addEventListener('click', closeModal);
  
    // Close the modal when clicking outside the modal content
    window.addEventListener('click', event => {
      if (event.target === modal) {
        closeModal();
        quickAccess.innerHTML = 'Quick Access:'; //Reset the quick-access section...
      }
    });
  });

const iframe = modal.querySelector('#modal-iframe');

// Add an event listener for when the iframe content is loaded
iframe.addEventListener('load', () => {
  // Access the iframe's contentDocument
  const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

  // Get the project-link elements from the iframe's content
  const projectLinks = iframeDoc.querySelectorAll('.project-link');

  // Get the quick-access element within the modal
  const quickAccess = modal.querySelector('.quick-access');

  // Clear any existing content in quick-access
  quickAccess.innerHTML = 'Quick Access:';

  // Iterate through project-links and add them to quick-access
  projectLinks.forEach(link => {
    const clonedLink = link.cloneNode(true);
    quickAccess.appendChild(clonedLink);
  });
});
  