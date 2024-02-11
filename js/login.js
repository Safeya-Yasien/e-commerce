//
//
//
//
//
//
//
//

let userName = document.querySelector("#user-name");
let password = document.querySelector("#password");
let signUp = document.querySelector("#sign-in");
let errorMessage = document.querySelector(".error");

signUp.addEventListener("click", logIn);

function logIn(e) {
  e.preventDefault();

  checkEmptyInput();
}

function checkEmptyInput() {
  if (userName.value === "" || password.value === "") {
    errorMessage.innerHTML = "You can't leave this field empty";
    errorMessage.classList.add("invalid");
  } else {
    getFromLocalStorage();
  }
}

function getFromLocalStorage() {
  let localStorageUserName = localStorage.getItem("username");
  let localStoragePassword = localStorage.getItem("password");

  if (
    localStorageUserName.trim() &&
    localStorageUserName === userName.value.trim() &&
    localStoragePassword.trim() &&
    localStoragePassword === password.value.trim()
  ) {
    setInterval(redirectToHomePage(), 2000);
  } else {
    errorMessage.innerHTML = "username or password is wrong";
    errorMessage.classList.add("invalid");
  }
}

function redirectToHomePage() {
  window.location.href = "./index.html";
}
