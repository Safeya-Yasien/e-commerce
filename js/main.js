//
//
//
//
//
//

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

// products

const products = [
  {
    id: 1,
    title: "OPPO A37f",
    description: "Good product with excellent quality",
    price: 230.0,
    image: "imgs/phone-1.jpg",
    altText: "phone-1",
  },
  {
    id: 2,
    title: "OPPO A37f",
    description: "Good product with excellent quality",
    price: 230.0,
    image: "imgs/phone-2.jpg",
    altText: "phone-2",
  },
  {
    id: 3,
    title: "OPPO A37f",
    description: "Good product with excellent quality",
    price: 230.0,
    image: "imgs/phone-3.jpg",
    altText: "phone-3",
  },
  {
    id: 4,
    title: "OPPO A37f",
    description: "Good product with excellent quality",
    price: 230.0,
    image: "imgs/phone-4.jpg",
    altText: "phone-4",
  },
  {
    id: 5,
    title: "OPPO A37f",
    description: "Good product with excellent quality",
    price: 230.0,
    image: "imgs/phone-5.jpg",
    altText: "phone-5",
  },
  {
    id: 6,
    title: "OPPO A37f",
    description: "Good product with excellent quality",
    price: 230.0,
    image: "imgs/phone-6.jpg",
    altText: "phone-6",
  },
  {
    id: 7,
    title: "Havit Headphone",
    description: "Model Number: SD-1004",
    price: 445.0,
    image: "imgs/headphone-1.jpg",
    altText: "headphone-1",
  },
  {
    id: 8,
    title: "Havit Headphone",
    description: "Model Number: SD-1004",
    price: 445.0,
    image: "imgs/headphone-2.jpg",
    altText: "headphone-2",
  },
  {
    id: 9,
    title: "Havit Headphone",
    description: "Model Number: SD-1004",
    price: 445.0,
    image: "imgs/headphone-3.jpg",
    altText: "headphone-3",
  },
];

function displayProducts() {
  let product = products.map((item) => createProduct(item));
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
  productInfo.appendChild(productName);
  productInfo.appendChild(productDescription);
  productInfo.appendChild(productPrice);
  productInfo.appendChild(addToCartButton);

  productMainDiv.appendChild(productInfo);

  productsContent.appendChild(productMainDiv);
}

displayProducts();

function addProduct(id) {
  let choosenItem = products.find((item) => item.id === id);

  shoppingProduct.insertBefore(
    addProductToShopping(choosenItem),
    shoppingProduct.firstChild
  );

  let shoppingProductsLength = document.querySelectorAll(".shopping-product p");

  badge.style.display = "flex";

  console.log(shoppingProductsLength);
  badge.innerHTML = shoppingProductsLength.length;
}

function addProductToShopping(item) {
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
