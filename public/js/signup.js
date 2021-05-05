const signUpBtn = document.getElementById("signUpBtn");
const emailInput = document.getElementById("signUpEmail");
const passwordInput = document.getElementById("signUpPassword");

// When the signup button is clicked, we validate the email and password are not blank
signUpBtn.addEventListener("click", e => {
  e.preventDefault();
  const userData = {
    email: emailInput.value,
    Password: passwordInput.value
  };

  console.log(userData);

  // if (!userData.email || !userData.Password) {
  //   return;
  // }
  // emailInput.val("");
  // passwordInput.val("");

  fetch("/api/signup", {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.log(err);
    });
});
