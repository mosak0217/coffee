'use strict';

// href=”#”のaタグを取得（→その後、href属性からid名を抜き出す）
const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
// for文を回して、aタグそれぞれに対してクリックイベント

// -- 繰り返し処理 1 回目 --
// 1) 初期化式で変数 i に 0 が代入される
// 2) 条件式 i < smoothScrollTrigger.length が true
// 3) console.log("i = " + i); が実行される
// 4) 変化式 i++ が実行されて変数 i の値が 1 となる
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
      // スムースにスクロールする
      window.scrollTo({
        top: target,
        behavior: 'smooth',
      });
    });
  }
  