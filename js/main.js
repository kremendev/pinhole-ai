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
