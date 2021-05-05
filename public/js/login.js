// Getting references to our form and inputs
const loginForm = document.getElementById("form-login");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");

// When the form is submitted, we validate there's an email and password entered
loginForm.addEventListener("click", e => {
  e.preventDefault();
  const userData = {
    email: emailInput.value,
    password: passwordInput.value
  };

  if (!userData.email || !userData.password) {
    return;
  }

  // If we have an email and password we run the loginUser function and clear the form
  loginUser(userData.email, userData.password);
  // emailInput.val("");
  // passwordInput.val("");
});

// loginUser does a post to our "api/login" route and if successful, redirects us the the members page
function loginUser(email, password) {
  fetch("/api/login", {
    method: "POST",
    email: email,
    password: password
  })
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.log(err);
    });
}
