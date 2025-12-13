"use strict";

const slideOptions = {
  type: 'loop',
  gap: '40px', // 1. 40px に設定
  width: '1096px',
  perPage: 3,
  padding: {
    padding: { left: '28px', right: '28px' },
    // 2. 左右に padding 28px を追加
  },
  pagination: false,
  breakpoints: {
    768: {
      pagination: true,
      perPage: 1,
    }
  }
}

document.addEventListener('DOMContentLoaded', function () {
  new Splide ('.splide', slideOptions).mount();
  // 3. Splide を初期化し、スライドを表示
});