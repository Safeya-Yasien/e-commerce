//
//
//
//
//
//
//
//

let userName = document.querySelector("#user-name");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let signUp = document.querySelector("#sign-up");
let errorMessage = document.querySelector(".error");

signUp.addEventListener("click", register);

function register(e) {
  e.preventDefault();

  checkEmptyInput();
}

function checkEmptyInput() {
  if (userName.value === "" || email.value === "" || password.value === "") {
    errorMessage.innerHTML = "You can't leave this field empty";
    errorMessage.classList.add("invalid");
  } else if (!email.value.includes("@")) {
    errorMessage.innerHTML = "Email must contain @ symbol";
    errorMessage.classList.add("invalid");
  } else {
    addToLocalStorage();
  }
}

function addToLocalStorage() {
  localStorage.setItem("username", userName.value);
  localStorage.setItem("email", email.value);
  localStorage.setItem("password", password.value);

  setInterval(redirectToLogInPage(), 2000);
}

function redirectToLogInPage() {
  window.location.href = "./login.html";
}
