const newpass = document.getElementById("newpass");
const rpass = document.getElementById("rpass");
const butt = document.getElementById("butt");

const visible = document.getElementById("visible");
const visible1 = document.getElementById("visible1");

butt.addEventListener("click", checkUserIpt);

function checkUserIpt(e) {
  e.preventDefault();

  const newpassVal = newpass.value;
  const rpassVal = rpass.value;

  if (newpassVal === "" || rpassVal === "") {
    alert("Some inputs are empty");
  } else if (newpassVal !== rpassVal) {
    alert("Your passwords do not match");
  } else if (newpassVal === "" && rpassVal === "") {
    alert(" Your password and repeat is not supposed to be empty");
  } else if (newpassVal === "") {
    alert("Your password is not supposed to be empty");
  } else if (rpassVal === "") {
    alert("You have to reapet your password");
  } else if (newpassVal === window.localStorage.getItem("Password")) {
    alert("Your password can't be the same as the old one");
  } else {
    window.localStorage.setItem("Password", newpassVal);
    alert("Your new password has been created!");
    window.location.href = "https://odogwufirst.github.io/Simple-Web/congratulation.html";
  }
}

visible.addEventListener("click", showNewPassword);

function showNewPassword() {
  // newpass.type = "password"
  // newpass.type = "text"

  // if (this.type === password){
  // type for the input to text
  // }
  if (newpass.type === "password") {
    newpass.type = "text";
  } else {
    newpass.type = "password";
  }

  // newpass.type = "password" ? "text" : "password";

  // const newPass = {
  //   type: "password",
  //   value: "",
  // }

  // newPass.type = "pass"
}

visible1.addEventListener("click", showRepeatPassword);

function showRepeatPassword() {

  if (rpass.type === "password") {
    rpass.type = "text";
  } else {
    rpass.type = "password";
  }

}
