"use strict";

const articleElement = document.querySelector("#article");
const toggleButtonElement = document.querySelector("#toggle-button");

const toggleArticleVisibility = () => {
  // element.style.display プロパティを用いて、記事が表示されている場合は非表示に、非表示の場合は表示にする処理を書いてください
  const currentDisplay = window.getComputedStyle(articleElement).display;
  if (currentDisplay === "none"){
    articleElement.style.display = "block";
  }else{
    articleElement.style.display = "none";
  }
};

// ボタンをクリックしたら toggleArticleVisibility を実行する
toggleButtonElement.addEventListener("click", toggleArticleVisibility);