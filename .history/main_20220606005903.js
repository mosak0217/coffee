'use strict';

// href=”#”のaタグを取得（→その後、href属性からid名を抜き出す）
const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
// for文を回して、aタグそれぞれに対してクリックイベント
  for (let i = 0; i < smoothScrollTrigger.length; i++){
    smoothScrollTrigger[i].addEventListener('click', (e) => {
      e.preventDefault();
      let href = smoothScrollTrigger[i].getAttribute('href');
      let targetElement = document.getElementById(href.replace('#', ''));
      // ターゲットの位置を取得
      const rect = targetElement.getBoundingClientRect().top;
      const offset = window.pageYOffset;
      const gap = 60;
      const target = rect + offset - gap;
      window.scrollTo({
        top: target,
        behavior: 'smooth',
      });
    });
  }