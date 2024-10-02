// we have to build a sign up form
// store the user's email and password using localstorage
// add route guards..

const emailIpt = document.getElementById("mail"); //we need the values from both the email and password inputs
const passIpt = document.getElementById("pass");

const loginBtn = document.getElementById("butt");

//we need to add an event listner
loginBtn.addEventListener("click", validateUser);

// validate the user
function validateUser(e) {
  e.preventDefault();
  const email = emailIpt.value;
  const pass = passIpt.value;

  if (email === "" && pass === "") {
    alert(" Your email and password is not supposed to be empty");
  } else if (email === "") {
    alert("Your email is not supposed to be empty");
  } else if (pass === "") {
    alert("Your password is not supposed to be empty");
  } else {
    authenticate(email, pass);
  }
}

// authenticate user credentials
function authenticate(email, pass) {
  if (
    email === window.localStorage.getItem("Email") &&
    pass === window.localStorage.getItem("Password")
  ) {
    alert("You have logged in Successfully!");
    window.location.href = "http://127.0.0.1:5500/html/landing.html";
  } else {
    alert("Your login credentials are wrong");
  }
}

// const login = document.getElementById("butt");

// login.addEventListener("click", showPopUp);

// function showPopUp() {
//   const input = document.getElementById("mail");

//   const inputText = input.value;
//   console.log(inputText);
//   if (inputText != "hi") {
//     alert("Wrong Email " + inputText);
//   } else {
//     alert("Login Success!");
//   }
// }

// const input = document.getElementById("mail");

// const inputText = input.value;

// // DOM - Document Object Module
// // document.body.innerhtml
// // document.body.innertext
// console.log(inputText);

const visible = document.getElementById("visible");

visible.addEventListener("click", showNewPassword);

function showNewPassword() {

  if (pass.type === "password") {
    pass.type = "text";
  } else {
    pass.type = "password";
  }


}

