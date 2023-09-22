'use strict';
console.log('app.js file was loaded');

const els = {
  container: document.getElementById('formContainer'),
  form: document.forms.emailForm,
  email: document.getElementById('email'),
  errorContainer: document.getElementById('errorContainer'),
  output: document.getElementById('output'),
  dismiss: document.getElementById('dismissButton'),
}
console.log('els ===', els);

els.form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('forma pateikta')

  const formInputDataObj = {
    email: els.email.value
  }
  console.log('formInputDataObj ===', formInputDataObj);

  if (email.value === '') {
    showError('Email is needed')
    return;
  }

  let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (email.value.match(validRegex)) {
    showError("Valid email address!");
    showSuccess(formInputDataObj)
    return true;
  } else {
    showError("Invalid email address!");
    return false;
  }

})

function showError(msg) {
  els.errorContainer.innerHTML = `<h2 class='error'>${msg}</h2>`
}



function hideFormContainer() {
  els.container.style.display = 'none'
}

function showSuccess(valueObj) {
  const divEl = document.createElement('div');
  divEl.classList.add('success');
  console.log('divEl ===', divEl);
  divEl.innerHTML = `
  <div>
  <img class="successIcon" src="/assets/images/icon-list.svg" alt="icon">
  <h2 class="mainHeader">Thanks for subscribing!</h2>
  <p class="successText">A confirmation email has been sent to <span class="successEmail">${valueObj.email}</span>.
    Please open it and click the button inside to confirm your subscription.
  </p>
  </div>
  `;
  const successBtn = document.createElement('button')
  successBtn.textContent = 'Dismiss message'
  successBtn.classList.add('btn');
  successBtn.classList.add('successBtn');
  divEl.append(successBtn);
  successBtn.addEventListener('click', () => {
    els.output.style.display = 'none';
    els.container.style.display = 'block'
  })
  els.output.append(divEl);
  hideFormContainer();
}

