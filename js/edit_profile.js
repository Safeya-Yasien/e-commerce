let editProfileUsername = document.querySelector("#edit-profile-username");
let editProfileEmail = document.querySelector("#edit-profile-email");
let editProfileSubmit = document.querySelector("#edit-profile-button");

let getUserNameFromLocalStorage = localStorage.getItem("username");
let getUserEmailFromLocalStorage = localStorage.getItem("email");

editProfileUsername.value = getUserNameFromLocalStorage;
editProfileEmail.value = getUserEmailFromLocalStorage;

editProfileSubmit.addEventListener("click", updateUserInfo);

function updateUserInfo() {
  localStorage.setItem("username", editProfileUsername.value);
  localStorage.setItem("email", editProfileEmail.value);

  window.location = "profile.html";
}
