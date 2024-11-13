const emailIput = document.getElementById("mail");
const loginBtn = document.getElementById("butt");

loginBtn.addEventListener("click", checkEmailValidity);

function checkEmailValidity(e) {
  e.preventDefault();
  const email = emailIput.value;
  
  if(email === window.localStorage.getItem("Email")){
    alert("Your email is valid ")
    window.location.href = "http://127.0.0.1:5500/html/create.html";
  }else{alert("Your email is not valid ")
    
  }

}
