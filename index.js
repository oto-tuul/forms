const email = document.getElementById('email');
const emailError = document.querySelector('#email + span.error');

email.addEventListener('input', (event) => {
  if (email.validity.valid) {
    emailError.textContent = '';
    // emailError.className = 'error';
  } else {
    showEmailError();
  }
});

function showEmailError() {
  if (email.validity.valueMissing) {
    emailError.textContent = 'AAAAAH!';
  } else if (email.validity.typeMismatch) {
    emailError.textContent =
      'Please enter a valid email address with the format example@domain.com';
  }
}
