"use strict";

const titleInputElement = document.getElementById("movie-title");
const updateButtonElement = document.getElementById("update-button");
let currentEditingElement = null;

document.querySelectorAll('.edit-button').forEach((btn) => {
  btn.addEventListener('click', function() {
    // ここを追加しましょう
    const movieElement = btn.parentElement.querySelector("span");
    titleInputElement.value = movieElement.textContent;
    currentEditingElement = movieElement;
    updateButtonElement.textContent = "更新";
  });
});

updateButtonElement.addEventListener('click', function() {
  if (currentEditingElement) {
    // ここを追加しましょう
    currentEditingElement.textContent = titleInputElement.value;
    currentEditingElement = null;
    titleInputElement.value = "";
    updateButtonElement.innerHTML = "追加";
  }
});
