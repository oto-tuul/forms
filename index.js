const email = document.getElementById('email');
const emailError = document.querySelector('#email + span.error');
const country = document.getElementById('country');
const countryError = document.querySelector('#country + span.error');
const zipcode = document.getElementById('zip-code');
const zipcodeError = document.querySelector('#zip-code + span.error');
const pw = document.getElementById('pw');
const pwError = document.querySelector('#pw + span.error');
const pwc = document.getElementById('pwc');
const pwcError = document.querySelector('#pwc + span.error');

const form = document.getElementsByTagName('form')[0];

email.addEventListener('input', (event) => {
  if (email.validity.valid) {
    emailError.textContent = '';
    emailError.className = 'error';
  } else {
    showEmailError();
  }
});

country.addEventListener('input', (event) => {
  if (country.validity.valid) {
    countryError.textContent = '';
    countryError.className = 'error';
  } else {
    showCountryError();
  }
});

zipcode.addEventListener('input', (event) => {
  if (zipcode.validity.valid) {
    zipcodeError.textContent = '';
    zipcodeError.className = 'error';
  } else {
    showZipcodeError();
  }
});

pw.addEventListener('input', (event) => {
  if (pw.validity.valid) {
    pwError.textContent = '';
    pwError.className = 'error';
  } else {
    showPwError();
  }
});

pwc.addEventListener('input', (event) => {
  if (pw.value === pwc.value) {
    pwcError.textContent = '';
    pwcError.className = 'error';
  } else {
    pwc.validity.valid = false;
    showPwcError();
  }
});

form.addEventListener('submit', (event) => {
  if (!email.validity.valid) {
    showEmailError();
    event.preventDefault();
  }
  if (!country.validity.valid) {
    showCountryError();
    event.preventDefault();
  }
  if (!zipcode.validity.valid) {
    showZipcodeError();
    event.preventDefault();
  }
  if (!pw.validity.valid) {
    showPwError();
    event.preventDefault();
  }
  if (!pwc.validity.valid) {
    showPwcError();
    event.preventDefault();
  }
});

function showEmailError() {
  if (email.validity.valueMissing) {
    emailError.textContent = 'Please enter a valid email address';
  } else if (email.validity.typeMismatch) {
    emailError.textContent =
      'Please enter a valid email address with the format example@domain.com';
  }
}

function showCountryError() {
  if (country.validity.valueMissing) {
    countryError.textContent = 'Please enter a country name';
  }
}

function showZipcodeError() {
  if (zipcode.validity.valueMissing) {
    zipcodeError.textContent = 'Please enter a zipcode';
  } else if (zipcode.validity.rangeUnderflow) {
    zipcodeError.textContent = 'Please enter zipcode at least 6 digits long';
  }
}

function showPwError() {
  if (pw.validity.valueMissing) {
    pwError.textContent = 'Please enter a password';
  } else if (pw.validity.tooShort) {
    pwError.textContent =
      'Please enter a password with length of 8-16 characters, which contains at least one uppercase letter, one lowercase letter, one number and one symbol{!@#$%^&*/()_+-}';
  } else if (pw.validity.tooLong) {
    pwError.textContent =
      'Please enter a password with length of 8-16 characters, which contains at least one uppercase letter, one lowercase letter, one number and one symbol [!@#$%^&*/()_+-]';
  } else if (pw.validity.patternMismatch) {
    pwError.textContent =
      'Please enter a password with length of 8-16 characters, which contains at least one uppercase letter, one lowercase letter, one number and one symbol [!@#$%^&*/()_+-]';
  }
}

function showPwcError() {
  if (pwc.validity.valueMissing) {
    pwcError.textContent = 'Please repeat your password to confirm';
  } else if (pw.value != pwc.value) {
    pwcError.textContent = 'The passwords do not match';
  }
}
