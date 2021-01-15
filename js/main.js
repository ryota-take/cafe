'use strict';
// {

// const images = [
//   'img/marche_a.png',
//   'img/marche_b.png',
//   'img/marche_c.png'
// ];

// let currentIndex = 0;
// const slide = document.querySelector('.slide');
// slide.src = images[0];

// function playSlide() {
  
//     if (currentIndex === 2) {
//       currentIndex = 0;
//     } else {
//       currentIndex ++;
//     }

//  slide.src = images[currentIndex];
// };

// setInterval(playSlide, 5000);

// }

{

  const swiper = new Swiper('.swiper-container', {
  
  
    speed: 1500,
  
    loop: true,
  
    autoplay: {
      delay: 4000
    },
  
  
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
  });
}

{
  $(function(){
    $('.btn-trigger').on('click', function() {
      $(this).toggleClass('active');
      return false;
    });
  });
}

// ==== ハンバーガーメニュー ====

const btn = document.getElementById('btn01');
const menuWindow = document.querySelector('.menu-window');
const body = document.querySelector('body');

btn.addEventListener('click', () => {
  menuWindow.classList.toggle('window-show');
  body.classList.toggle('modal-open');
})



// ==== トップへ戻るボタン ====

$(function(){
  const pagetop = $('#page_top');
  // ボタン非表示
  pagetop.hide();
  // 100px スクロールしたらボタン表示
  $(window).scroll(function () {
     if ($(this).scrollTop() > 100) {
          pagetop.fadeIn();
     } else {
          pagetop.fadeOut();
     }
  });
  pagetop.click(function () {
     $('body, html').animate({ scrollTop: 0 }, 800);
     return false;
  });
});






