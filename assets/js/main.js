document.addEventListener('DOMContentLoaded', customJS);

function customJS() {
  "use strict";

  // Selector Function
  const $ = (selector, areAll) => areAll ? document.querySelectorAll(selector) : document.querySelector(selector);



  // Variabels
  const homePage = $('.signup-login-buttons');
  const loginSection = $('.form-wrap.login');
  const signupSection = $('.form-wrap.signup');


  // Function: Show Login page
  function showLoginPage(e) {
    homePage.style.display = 'none';
    loginSection.style.display = 'block';
    loginSection.animate(
      [{
          opacity: 0.1
        },
        {
          opacity: 1
        }
      ], {
        duration: 400,
        itarations: 1
      });

    e.preventDefault();
  }

  // Function: Show Signup Section
  function showSignupSection(e) {
    homePage.style.display = 'none';
    signupSection.style.display = 'block';
    $('.date-submit').style.display = 'none';
    $('.email-password-checkbox').style.display = 'block';
    signupSection.animate(
      [{
          opacity: 0.1
        },
        {
          opacity: 1
        }
      ], {
        duration: 400,
        itarations: 1
      });

    e.preventDefault();
  }

  // Function: Show Welcome section
  function showWelcomeSection(e) {
    homePage.style.display = 'block';
    homePage.animate(
      [{
          opacity: 0.1
        },
        {
          opacity: 1
        }
      ], {
        duration: 400,
        itarations: 1
      });
    signupSection.style.display = loginSection.style.display = 'none';
    e.preventDefault();
  }

  // Function: showDateSubmitButtons

  function showDateSubmitButtons(e) {
    $('.form-box').classList.add('d-flex');
    $('.email-password-checkbox').style.display = 'none';
    $('.date-submit').style.display = 'block';
    $('.last-page').classList.remove('d-flex');
    $('.last-page').classList.add('d-none');
    $('.date-submit').animate(
      [{
          opacity: 0.1
        },
        {
          opacity: 1
        }
      ], {
        duration: 400,
        itarations: 1
      });
    $('.form-box').animate(
      [{
          opacity: 0.1
        },
        {
          opacity: 1
        }
      ], {
        duration: 400,
        itarations: 1
      });
    e.preventDefault();
  }

  // Function: Show last page

  function showLastPage() {

    $('.last-page').classList.add('d-flex');
    $('.last-page').classList.remove('d-none');
    $('.last-page').animate(
      [{
          opacity: 0.1
        },
        {
          opacity: 1
        }
      ], {
        duration: 400,
        itarations: 1
      });

    $('.form-box').classList.add('d-none');
    $('.form-box').classList.remove('d-flex');
  }

  // Function: Submit the form
  function submitTheForm() {
      $('.signup form').submit();
  }

  // Events: all event Listeners
  function allEventListeners() {
    var loginButton = $('.login-btn');
    var loginBackButton = $('.login-buttons button:first-child');
    var signupButton = $('.signup-btn');
    var signupBackButton = $('.signup-buttons button:first-child');
    var signupNextButton = $('.signup-buttons button[type="button"]');
    var signupLastStepButton = $('.last-step-buttons button[type="button"]');
    var signupLastStepBackBtn = $('.last-step-buttons button:first-child');
    var lastPageBackBtn = $('.signup-submit-buttons button:first-child');
    var submitButton = $('.signup-submit'); 

    signupButton.addEventListener('click', showSignupSection);
    signupBackButton.addEventListener('click', showWelcomeSection);
    loginButton.addEventListener('click', showLoginPage);
    loginBackButton.addEventListener('click', showWelcomeSection);
    signupNextButton.addEventListener('click', showDateSubmitButtons);
    signupLastStepBackBtn.addEventListener('click', showSignupSection);
    signupLastStepButton.addEventListener('click', showLastPage);
    lastPageBackBtn.addEventListener('click',showDateSubmitButtons);
    submitButton.addEventListener('click', submitTheForm);
  }

  allEventListeners();



}