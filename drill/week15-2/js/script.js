"use strict";

document.getElementById("all").addEventListener("click", function() {
    displayProducts("product");
});

document.getElementById("electronics").addEventListener("click", function() {
    displayProducts("product-electronics");
});

document.getElementById("clothing").addEventListener("click", function() {
    displayProducts("product-clothing");
});

function displayProducts(category) {
  const products = document.querySelectorAll(".product");
  products.forEach(product => {
    if (category === "product") {
      product.classList.remove("hidden"); // Allなら全部表示
    } else if (product.classList.contains(category)) {
      product.classList.remove("hidden"); // 該当カテゴリなら表示
    } else {
      product.classList.add("hidden"); // それ以外は非表示
    }

    // const products = document.querySelectorAll(".product");
  });
}