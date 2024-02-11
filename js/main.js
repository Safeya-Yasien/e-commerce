//
//
//
//
//
//

let userField = document.querySelector(".user-sign-field");
let userInfo = document.querySelector(".user-sign-info");
let logOutButton = document.querySelector("#log-out");

let localStorageUserName = localStorage.getItem("username");

if (localStorageUserName) {
  userInfo.style.display = "flex";
  userField.remove();

  let username = document.querySelector("#username");
  username.innerHTML = localStorageUserName;
}

logOutButton.addEventListener("click", logOut);

function logOut() {
  localStorage.clear();

  setInterval(redirectToRegisterPage(), 2000);
}

function redirectToRegisterPage() {
  window.location.href = "./register.html";
}
