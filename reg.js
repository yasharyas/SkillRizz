
  const passwordInput = document.querySelector('.form-control-lg#typePasswordX');
  const confirmPasswordInput = document.querySelector('.form-control-lg#typeConfirmPasswordX');
  const emailInput = document.querySelector('.form-control-lg#typeEmailX');
  const confirmEmailInput = document.querySelector('.form-control-lg#typeConfirmEmailX');
  const submitButton = document.querySelector('button[type="submit"]');

  confirmPasswordInput.addEventListener('input', () => {
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (password === confirmPassword) {
      confirmPasswordInput.setCustomValidity(''); // Clear the validation error
    } else {
      confirmPasswordInput.setCustomValidity('Passwords do not match');
    }
  });

  emailInput.addEventListener('input', () => {
    const email = emailInput.value;
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (isValidEmail) {
      emailInput.setCustomValidity(''); // Clear the validation error
    } else {
      emailInput.setCustomValidity('Please enter a valid email address');
    }
  });

  submitButton.addEventListener('click', (event) => {
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    const email = emailInput.value;
    const confirmEmail = confirmEmailInput.value;

    if (password !== confirmPassword) {
      event.preventDefault(); // Prevent form submission
      showAlert('Passwords do not match');
    }

    if (email !== confirmEmail) {
      event.preventDefault(); // Prevent form submission
      showAlert('Emails do not match');
    }
  });

  function showAlert(message) {
    const alertElement = document.createElement('div');
    alertElement.classList.add('alert', 'alert-danger', 'mt-2');
    alertElement.textContent = message;

    const container = document.querySelector('.card-body');
    container.appendChild(alertElement);

    setTimeout(() => {
      alertElement.remove();
    }, 3000);
  }

