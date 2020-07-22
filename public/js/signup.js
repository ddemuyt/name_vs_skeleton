/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
$(document).ready(function() {
  // Getting references to our form and input
  const signUpForm = $('form.signup');
  const emailInput = $('input#email-input');
  const passwordInput = $('input#password-input');
  const heroInput = $('input#hero-input');

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on('submit', function(event) {
    event.preventDefault();
    const userData = {
      user: {
        email: emailInput.val().trim(),
        password: passwordInput.val().trim(),
      },
      hero: {
        name: heroInput.val().trim(),
      },
    };

    if (!userData.user.email || !userData.user.password || !userData.hero.name) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData);
    emailInput.val('');
    passwordInput.val('');
    heroInput.val('');
  });
  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(userData) {
    $.post('/api/signup', userData).then(function() {
      window.location.replace('/members');
      // If there's an error, handle it by throwing up a bootstrap alert
    }).catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    console.log(err);
  }
});
