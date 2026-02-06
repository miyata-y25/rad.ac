//印刷時の見た目をPCに揃える
window.addEventListener('beforeprint', (event) => {});

// ========================
// header アコーディオン
// ========================

//科サブナビから追従


// ========================
// ハンバーガーメニューアコーディオン
// ========================
$(function () {
  $('.sp_menu .menu a.plus').on('click', function () {
    $(this).next('.child_menu').slideToggle();
    $(this).toggleClass('active');
  });
});

// ========================
// scroll フェードイン
// ========================
window.addEventListener('DOMContentLoaded', () => {
  const boxes = document.querySelectorAll('.fade');
  window.addEventListener('scroll', showBoxes);
  showBoxes();
  function showBoxes() {
    const triggerBottom = (window.innerHeight / 5) * 4;
    boxes.forEach((box) => {
      const boxTop = box.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        box.classList.add('scrollin');
      } else {
        box.classList.remove('scrollin');
      }
    });
  }
});

// ========================
// 訪問者メニュー表示
// ========================
$(function () {
  $(document).on('click', '.cv_btn .cv_btn__btn', function () {
    $(this).next('ul').slideToggle();
    $(this).toggleClass('active');
  });
});

// ========================
// トップページ
// ========================
