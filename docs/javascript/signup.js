const mail = document.getElementById("mail");
const pass = document.getElementById("pass");
const rpass = document.getElementById("rpass");
const butt = document.getElementById("butt");

butt.addEventListener("click", checkUserIpt);

//get the values
// compare if they are equal (passwords)

function checkUserIpt(e) {
  e.preventDefault();
  const mailVal = mail.value;
  const passVal = pass.value;
  const rpassVal = rpass.value;

  //   !==
  //   ===
  if (mailVal === "" || passVal === "" || rpassVal === "") {
    alert("Some inputs are empty");
  } else if (passVal !== rpassVal) {
    alert("Your passwords do not match");
  } else if (!mailVal.includes("@")) {
    alert("Enter a valid Email");
  } else if (mailVal === "" && passVal === "") {
    alert(" Your email and password is not supposed to be empty");
  } else if (mailVal === "") {
    alert("Your email is not supposed to be empty");
  } else if (passVal === "") {
    alert("Your password is not supposed to be empty");
  } else if (rpassVal === "") {
    alert("You have to reapet your password");
  } else {
    window.localStorage.setItem("Email", mailVal);
    window.localStorage.setItem("Password", passVal);
    alert("Your account has been successfully created!");
    window.location.href = "./index.html";
  }
}

// window.localStorage.setItem(key, value)
// window.localStorage.getItem(key)
window.localStorage.setItem("EMAIL", "gade@gmail.com");

// when clicked, check if pass and rpass are equal
// check if email, pass and rpass are not empty
const sign = document.getElementById("sign");
const sign1= document.getElementById("sign1");

sign.addEventListener("click", showThatPassword);
function showThatPassword() {
  console.log(pass.type);
  if (pass.type === "password") {
    pass.type = "text";
  } else {
    pass.type = "password";
  }
}

sign1.addEventListener("click", showThisPassword);
function showThisPassword() {
  console.log(rpass.type)
  if (rpass.type === "password") {
    rpass.type = "text";
  } else {
    rpass.type = "password";
  }
}

// sign1.addEventListener("click", showNewPassword);

// function showNewPassword() {
//   if (pass.type === "password") {
//     pass.type = "text";
//   } else {
//     pass.type = "password";
//   }
// }