

var signUpBtn = document.getElementById("signUpBtn");
var emailInput = document.getElementById("signUpEmail");
var passwordInput = document.getElementById("signUpPassword");



// When the signup button is clicked, we validate the email and password are not blank
signUpBtn.addEventListener("click", function(e) {
  e.preventDefault();
  const userData = {
    email: emailInput.value,
    Password: passwordInput.value,
  };

  console.log(userData)

  // if (!userData.email || !userData.Password) {
  //   return;
  // }
  // emailInput.val("");
  // passwordInput.val("");

  fetch("/api/user", {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
});