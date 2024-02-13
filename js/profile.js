// - products length

let profileUserName = document.querySelector(".profile-user-name");
let profileUserEmail = document.querySelector(".profile-user-email");
let profileProductsLength = document.querySelector(
  ".profile-products-length span"
);
let editProfile = document.querySelector(".edit-profile");

let getUserNameFromLocalStorage = localStorage.getItem("username");
let getUserEmailFromLocalStorage = localStorage.getItem("email");
let getProductsFromLocalStorage =
  JSON.parse(localStorage.getItem("products")) || products;

profileUserName.innerHTML = `${getUserNameFromLocalStorage}`;
profileUserEmail.innerHTML = `${getUserEmailFromLocalStorage}`;
