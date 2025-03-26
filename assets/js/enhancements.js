// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  initPageTransitions();
  initDarkModeToggle();
  initLazyLoading();
  enhanceBookInteractions();
});

// Add page transitions
function initPageTransitions() {
  // Add transition class to all page content
  const mainContent = document.querySelector('main') || document.body;
  mainContent.classList.add('transition-fade');

  // Add fade-in animation on load
  mainContent.classList.add('fade-in');
  
  // Smooth transition between pages
  document.querySelectorAll('a').forEach(link => {
    // Skip external links and anchors
    if (
      link.hostname !== window.location.hostname || 
      link.getAttribute('href').startsWith('#') ||
      link.getAttribute('target') === '_blank'
    ) {
      return;
    }
    
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = link.getAttribute('href');
      
      // Fade out
      mainContent.style.opacity = 0;
      
      // Navigate after transition completes
      setTimeout(() => {
        window.location.href = target;
      }, 300);
    });
  });
}

// Toggle dark mode
function initDarkModeToggle() {
  // Create dark mode toggle button if it doesn't exist
  if (!document.getElementById('dark-mode-toggle')) {
    const toggle = document.createElement('button');
    toggle.id = 'dark-mode-toggle';
    toggle.innerHTML = '🌙';
    toggle.title = 'Toggle dark mode';
    toggle.classList.add('btn');
    toggle.style.position = 'fixed';
    toggle.style.bottom = '20px';
    toggle.style.right = '20px';
    toggle.style.zIndex = '1000';
    toggle.style.borderRadius = '50%';
    toggle.style.width = '50px';
    toggle.style.height = '50px';
    toggle.style.padding = '0';
    toggle.style.fontSize = '1.5rem';
    toggle.style.border = 'none';
    toggle.style.boxShadow = '0 3px 10px rgba(0, 0, 0, 0.2)';
    toggle.style.cursor = 'pointer';
    toggle.style.transition = 'all 0.3s ease';
    
    document.body.appendChild(toggle);
  }
  
  // Check for saved preference
  const darkModePreference = localStorage.getItem('darkMode');
  if (darkModePreference === 'enabled') {
    document.body.classList.add('dark-mode');
    document.getElementById('dark-mode-toggle').innerHTML = '☀️';
  }
  
  // Add event listener to toggle
  document.getElementById('dark-mode-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Save preference
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('darkMode', 'enabled');
      document.getElementById('dark-mode-toggle').innerHTML = '☀️';
    } else {
      localStorage.setItem('darkMode', 'disabled');
      document.getElementById('dark-mode-toggle').innerHTML = '🌙';
    }
  });
}

// Lazy load images
function initLazyLoading() {
  // Check if the browser supports Intersection Observer
  if ('IntersectionObserver' in window) {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.add('fade-in');
          imageObserver.unobserve(img);
        }
      });
    });
    
    lazyImages.forEach(img => {
      imageObserver.observe(img);
    });
  } else {
    // Fallback for browsers that don't support Intersection Observer
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => {
      img.src = img.dataset.src;
    });
  }
}

// Enhance book interactions
function enhanceBookInteractions() {
  // Add hover effects to book cards or containers
  document.querySelectorAll('.book-card, .book-container').forEach(book => {
    book.addEventListener('mouseenter', () => {
      book.style.transform = 'translateY(-5px)';
      book.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15)';
    });
    
    book.addEventListener('mouseleave', () => {
      book.style.transform = 'translateY(0)';
      book.style.boxShadow = '0 3px 10px rgba(0, 0, 0, 0.1)';
    });
  });
} 