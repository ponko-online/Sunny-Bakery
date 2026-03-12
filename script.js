document.addEventListener("DOMContentLoaded", () => {
  // ハンバーガー＆ナビ
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");
  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active"); // クロスに変形
      navMenu.classList.toggle("active"); // メニュー開閉
    });
  }

  // ギャラリー自動スライド
  const gallery = document.querySelector(".gallery-container");
  if (gallery) {
    gallery.innerHTML += gallery.innerHTML; // 複製してループ
    let scrollAmount = 0;
    function slideGallery() {
      scrollAmount += 1; // スピード
      if (scrollAmount >= gallery.scrollWidth / 2) scrollAmount = 0;
      gallery.style.transform = `translateX(-${scrollAmount}px)`;
      requestAnimationFrame(slideGallery);
    }
    slideGallery();
  }

  // フェードイン
  const fadeElements = document.querySelectorAll(".fade-in");
  const fadeInOnScroll = () => {
    fadeElements.forEach((el) => {
      const position = el.getBoundingClientRect().top;
      const screenPosition = window.innerHeight * 0.8;
      if (position < screenPosition) el.classList.add("show");
    });
  };
  window.addEventListener("scroll", fadeInOnScroll);
  fadeInOnScroll(); // 初回もチェック

  // ローディング画面
  const loading = document.getElementById("loading");
  if (loading) loading.style.display = "none";
});

// スマホ表示でスクロールしても隠れない
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    const headerHeight = document.querySelector("header").offsetHeight;
    const offsetTop =
      target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
    window.scrollTo({ top: offsetTop, behavior: "smooth" });
  });
});
