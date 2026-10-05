// Mobile navigation: the menu button opens and closes the nav panel.
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#site-nav');

if (navToggle && nav) {
  const setMenuOpen = (open) => {
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    nav.classList.toggle('is-open', open);
  };

  navToggle.addEventListener('click', () => {
    setMenuOpen(navToggle.getAttribute('aria-expanded') !== 'true');
  });

  // Close after choosing a section, or on Escape.
  nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) setMenuOpen(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav.classList.contains('is-open')) {
      setMenuOpen(false);
      navToggle.focus();
    }
  });
}

// Keep the footer copyright year current.
const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

// Contact form: validate fields and show a confirmation. The site has no
// backend, so nothing is sent; connect the form to a mail service before
// going live.
const form = document.querySelector('#contact-form');

if (form) {
  // Use our own messages instead of the browser's validation bubbles.
  form.noValidate = true;

  const status = form.querySelector('.form-status');
  const fields = [...form.querySelectorAll('input, textarea')];
  const messages = {
    name: 'Please enter your name.',
    email: 'Please enter a valid email address, like name@example.com.',
    message: 'Please enter a message.',
  };

  const validateField = (field) => {
    const valid = field.value.trim() !== '' && field.checkValidity();
    field.setAttribute('aria-invalid', String(!valid));
    form.querySelector(`#${field.id}-error`).textContent = valid ? '' : messages[field.name];
    return valid;
  };

  fields.forEach((field) => {
    // Check on leaving a filled-in field, and clear errors as soon as they are fixed.
    field.addEventListener('blur', () => {
      if (field.value !== '') validateField(field);
    });
    field.addEventListener('input', () => {
      if (field.getAttribute('aria-invalid') === 'true') validateField(field);
    });
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    // Validate every field so all errors show at once, then focus the first one.
    const firstInvalid = fields.filter((field) => !validateField(field))[0];
    if (firstInvalid) {
      status.textContent = '';
      firstInvalid.focus();
      return;
    }
    const name = form.elements.namedItem('name').value.trim();
    status.textContent = `Thanks, ${name}! We'll be in touch soon.`;
    form.reset();
    fields.forEach((field) => field.removeAttribute('aria-invalid'));
  });
}
