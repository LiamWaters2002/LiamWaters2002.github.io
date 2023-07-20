function updateFadeInElements() {
  var fadeElements = document.querySelectorAll('.fade-in');
  var scrollPosition = window.pageYOffset;
  
  for (var i = 0; i < fadeElements.length; i++) {
    var element = fadeElements[i];
    var elementOffsetTop = element.offsetTop;
    var elementHeight = element.offsetHeight;
  
    // Calculate the opacity based on scroll position
    var opacity = 1 - ((scrollPosition - elementOffsetTop) / elementHeight);
    opacity = Math.max(0, opacity);
  
    element.style.opacity = opacity.toFixed(2);
  }
}

// Call the function once during page load to set the initial opacity
updateFadeInElements();

// Add the scroll event listener
document.addEventListener('scroll', updateFadeInElements);
