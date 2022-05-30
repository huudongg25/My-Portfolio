const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// ====== slide favourite ====

const featureImg = $(".feature_img");
const prevBtn = $(".prev");
const nextBtn = $(".next");
const favImages = $$(".fav_images-item");
let currentIndex = 0;

function renderImg(index) {
  favImages.forEach((item) => {
    item.classList.remove("active");
  });
  currentIndex = index;
  featureImg.src = favImages[currentIndex].src;
  favImages[currentIndex].classList.add("active");
}

document.addEventListener("keydown", function (e) {
  if (e.keyCode == "37" && currentIndex > 0) {
    currentIndex--;
    renderImg(currentIndex);
  } else if (e.keyCode == "37" && currentIndex == 0) {
    currentIndex = favImages.length - 1;
    renderImg(currentIndex);
  }
});

document.addEventListener("keydown", function (e) {
  if (e.keyCode == "39" && currentIndex < favImages.length - 1) {
    currentIndex++;
    renderImg(currentIndex);
  } else if (e.keyCode == "39" && currentIndex == favImages.length - 1) {
    currentIndex = 0;
    renderImg(currentIndex);
  }
});

nextBtn.addEventListener("click", function () {
  if (currentIndex == favImages.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  renderImg(currentIndex);
});

prevBtn.addEventListener("click", function () {
  if (currentIndex == 0) {
    currentIndex = favImages.length - 1;
  } else {
    currentIndex--;
  }
  renderImg(currentIndex);
});

favImages.forEach((item, index) => {
  item.addEventListener("click", function () {
    renderImg(index);
  });
});

setInterval(function () {
  if (currentIndex == favImages.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  renderImg(currentIndex);
}, 6000);
renderImg(0);

// ====== scroll nav bar=====
const sections = $$("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((item) => {
    const sectionHeight = item.offsetHeight;
    const sectionTop = item.offsetTop - 170;
    const sectionId = item.getAttribute("id");
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      $(".nav_menu a[href*=" + sectionId + "]").classList.add("active-link");
    } else {
      $(".nav_menu a[href*=" + sectionId + "]").classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

// ========= change theme ==========
const btnsTheme = $$(".btn-theme");
const darkIcon = $("i.change-theme");
const lightIcon = $("i.light-theme");

btnsTheme.forEach((item) => {
  item.onclick = function () {
    document.body.classList.toggle("light-theme");
  };
});

lightIcon.onclick = function () {
  lightIcon.parentNode.classList.add("hide");
  lightIcon.parentNode.classList.remove("show");
  darkIcon.parentNode.classList.remove("hide");
  darkIcon.parentNode.classList.add("show");
};
darkIcon.onclick = function () {
  darkIcon.parentNode.classList.add("hide");
  darkIcon.parentNode.classList.remove("show");
  lightIcon.parentNode.classList.remove("hide");
  lightIcon.parentNode.classList.add("show");
};

// ==== go to top ======

const goTopBtn = $(".go-to-top");

const scrollTop = function () {
  if (window.scrollY >= 900) {
    goTopBtn.classList.add("add");
  } else {
    goTopBtn.classList.remove("add");
  }
};

window.addEventListener("scroll", scrollTop);
