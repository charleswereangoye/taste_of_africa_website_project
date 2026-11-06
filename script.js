// JavaScript for Taste of Africa website

document.addEventListener('DOMContentLoaded', function () {

  // Dark and light mode toggle
  const themeToggleBtn = document.getElementById('theme-toggle');
  const mobileThemeBtn = document.getElementById('mobile-theme-toggle');
  
  // Check if dark mode was saved in localStorage
  const savedTheme = localStorage.getItem('site-theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    if (themeToggleBtn) {
      themeToggleBtn.textContent = 'Light Mode';
    }
  }

  function handleThemeToggle() {
    document.body.classList.toggle('dark-mode');
    
    // Save user preference
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('site-theme', 'dark');
      if (themeToggleBtn) {
        themeToggleBtn.textContent = 'Light Mode';
      }
    } else {
      localStorage.setItem('site-theme', 'light');
      if (themeToggleBtn) {
        themeToggleBtn.textContent = 'Dark Mode';
      }
    }
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', handleThemeToggle);
  }

  if (mobileThemeBtn) {
    mobileThemeBtn.addEventListener('click', handleThemeToggle);
  }

  // Mobile hamburger menu toggle
  const menuToggleBtn = document.getElementById('menu-toggle');
  const mainNav = document.getElementById('main-nav');

  if (menuToggleBtn && mainNav) {
    menuToggleBtn.addEventListener('click', function () {
      const isOpen = mainNav.classList.toggle('is-open');
      menuToggleBtn.classList.toggle('is-active', isOpen);
      menuToggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (event) {
      if (!mainNav.contains(event.target) && !menuToggleBtn.contains(event.target) && mainNav.classList.contains('is-open')) {
        mainNav.classList.remove('is-open');
        menuToggleBtn.classList.remove('is-active');
        menuToggleBtn.setAttribute('aria-expanded', 'false');
      }
    });

    // Close menu when pressing Escape
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && mainNav.classList.contains('is-open')) {
        mainNav.classList.remove('is-open');
        menuToggleBtn.classList.remove('is-active');
        menuToggleBtn.setAttribute('aria-expanded', 'false');
      }
    });

    // Close menu when clicking a link inside it
    const navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        mainNav.classList.remove('is-open');
        menuToggleBtn.classList.remove('is-active');
        menuToggleBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Filter recipes by region
  const filterButtons = document.querySelectorAll('.filter-btn');
  const recipeCards = document.querySelectorAll('.recipe-filter-item');

  filterButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const selectedRegion = button.getAttribute('data-region');

      // Show or hide matching cards
      recipeCards.forEach(function (card) {
        const cardRegion = card.getAttribute('data-region');

        if (selectedRegion === 'all' || cardRegion === selectedRegion) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Favorite buttons using localStorage
  const favoriteButtons = document.querySelectorAll('.favorite-btn');
  let savedFavorites = JSON.parse(localStorage.getItem('savedRecipeFavorites')) || [];

  // Mark items that are already in favorites
  favoriteButtons.forEach(function (btn) {
    const recipeId = btn.getAttribute('data-recipe-id');

    if (savedFavorites.includes(recipeId)) {
      btn.classList.add('is-favorited');
      btn.setAttribute('aria-pressed', 'true');
    }

    // Toggle favorite when clicked
    btn.addEventListener('click', function () {
      const id = btn.getAttribute('data-recipe-id');

      if (savedFavorites.includes(id)) {
        savedFavorites = savedFavorites.filter(item => item !== id);
        btn.classList.remove('is-favorited');
        btn.setAttribute('aria-pressed', 'false');
      } else {
        savedFavorites.push(id);
        btn.classList.add('is-favorited');
        btn.setAttribute('aria-pressed', 'true');
      }

      localStorage.setItem('savedRecipeFavorites', JSON.stringify(savedFavorites));
    });
  });

  // Contact form validation
  const contactForm = document.getElementById('contact-form');
  const formSuccessBox = document.getElementById('form-success-message');

  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();

      const nameInput = document.getElementById('user-name');
      const messageInput = document.getElementById('user-message');
      const errorMsgBox = document.getElementById('form-error-message');

      // Check if message is longer than 20 characters
      if (messageInput.value.trim().length <= 20) {
        if (errorMsgBox) {
          errorMsgBox.textContent = 'Please write a message with more than 20 characters.';
          errorMsgBox.style.display = 'block';
        }
        messageInput.focus();
        return;
      }

      if (errorMsgBox) {
        errorMsgBox.style.display = 'none';
      }

      // Hide form and display thank you note
      contactForm.style.display = 'none';

      if (formSuccessBox) {
        const userName = nameInput.value.trim() || 'Friend';
        formSuccessBox.innerHTML = `
          <h3>Thank you, ${userName}!</h3>
          <p>We have received your message and will get back to you soon.</p>
        `;
        formSuccessBox.style.display = 'block';
      }
    });
  }

  // Footer newsletter submission
  const newsletterForm = document.getElementById('newsletter-form');
  const newsletterMsg = document.getElementById('newsletter-feedback');

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const emailInput = newsletterForm.querySelector('input[type="email"]');
      if (emailInput && emailInput.value) {
        newsletterMsg.textContent = 'Thank you for subscribing to our updates!';
        emailInput.value = '';
      }
    });
  }

});
