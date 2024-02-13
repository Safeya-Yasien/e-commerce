let userField = document.querySelector(".user-sign-field");
let userInfo = document.querySelector(".user-sign-info");
let logOutButton = document.querySelector("#log-out");
let productsContent = document.querySelector(".products-content");
let addToCartButton = document.querySelector(".add-to-cart");
let shoppingCart = document.querySelector(".shopping-cart");
let badge = document.querySelector(".badge");
let shoppingProduct = document.querySelector(".shopping-product");
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

function displayProducts() {
  let product = products.map((item) => createProduct(item));
  console.log(product)
}

function createProduct(item) {
  let productMainDiv = document.createElement("div");
  productMainDiv.className = "product";

  let productImg = document.createElement("img");
  productImg.className = "product-img";
  productImg.alt = `${item.altText}`;
  productImg.src = `${item.image}`;

  let productInfo = document.createElement("div");
  productInfo.className = "product-info";

  let favouriteIcon = document.createElement("i");
  favouriteIcon.className = "fa-solid fa-heart favourite";

  let productName = document.createElement("h2");
  productName.className = "product-name";
  productName.innerHTML = `${item.title}`;

  let productDescription = document.createElement("p");
  productDescription.className = "product-description";
  productDescription.innerHTML = `${item.description}`;

  let productPrice = document.createElement("p");
  productPrice.className = "product-price";
  productPrice.innerHTML = `${item.price}`;

  let addToCartButton = document.createElement("button");
  addToCartButton.className = "add-to-cart";
  addToCartButton.innerHTML = "Add To Cart";
  addToCartButton.addEventListener("click", function () {
    addProduct(item.id);
  });

  productMainDiv.appendChild(productImg);
  productInfo.appendChild(favouriteIcon);
  productInfo.appendChild(productName);
  productInfo.appendChild(productDescription);
  productInfo.appendChild(productPrice);
  productInfo.appendChild(addToCartButton);

  productMainDiv.appendChild(productInfo);

  productsContent.appendChild(productMainDiv);

}

displayProducts();

function addProduct(id) {
  if (checkUser()) {
    let choosenItem = products.find((item) => item.id === id);

    shoppingProduct.insertBefore(
      addProductToCart(choosenItem),
      shoppingProduct.firstChild
    );



    // number of added products to cart
    let shoppingProductsLength = document.querySelectorAll(
      ".shopping-product p"
    );
    badge.style.display = "flex";
    badge.innerHTML = shoppingProductsLength.length;
  }
}

function checkUser() {
  if (localStorage.getItem("username")) {
    return true;
  } else {
    window.location = "login.html";
  }
}

function addProductToCart(item) {
  const paragraph = document.createElement("p");
  paragraph.textContent = item.title;
  return paragraph;
}

shoppingCart.addEventListener("click", openCartMenu);

function openCartMenu() {
  let shoppingProductsLength = document.querySelectorAll(".shopping-product p");

  if (shoppingProductsLength.length !== 0) {
    if (shoppingProduct.style.display == "block") {
      shoppingProduct.style.display = "none";
    } else {
      shoppingProduct.style.display = "block";
    }
  }
}
