// step-01:add click event handler with the submit button
document.getElementById("btn-submit").addEventListener("click", function () {
  //step-02:get the email address inside the mail box input
  const emailField = document.getElementById("user-email");
  const email = emailField.value;
  //step-03:get the password
  const userPassword = document.getElementById("user-password");
  const password = userPassword.value;
  // console.log(email,password)

  //dont do this its an example
  //step-4:verify email and password
  if (email.includes(".com") && password !== "") {
    window.location.href = "bank.html";
  } else {
    alert(
      "Invalid user:    Please Enter Your Information Correctly and Try Again Later!"
    );
  }
});
