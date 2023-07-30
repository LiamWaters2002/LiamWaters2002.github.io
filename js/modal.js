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
      }
    });
  });
  