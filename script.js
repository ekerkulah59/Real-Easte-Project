// var images = ["image1 (1).jpg", "image1 (2).jpg", "imagess.png"];
// let currentImage = 0;
// let time = 5000;
// function slidingImage() {
//   const image = document.getElementById("slide");
//   if (currentImage < myImages.length - 1) {
//     currentImage++;
//     image.src = `image/${myImages[currentImage]}`;
//   } else {
//     currentImage = 0;
//   }
//   setTimeout("slidingImage()", time);
// }
// window.onload = slidingImage();

// const navlinks = document.querySelector(".navlinks");
// const navToggle = document.querySelector(".navbar_toggle");
// navToggle.addEventListener("click", function () {
//   navlinks.classList.toggle("show-nav");
// });

const themeBtn = document.getElementById("theme-btn");
const darkTheme = document.querySelectorAll(".dark-theme");

themeBtn.onclick = () => {
  themeBtn.classList.toggle("fa-sun");
  if (themeBtn.classList.contains("fa-sun")) {
    document.body.classList.add("changeTheme");
    for (const theme of darkTheme) {
      theme.style.backgroundColor = "black";
      theme.style.color = "#eee";
    }
  } else {
    document.body.classList.remove("changeTheme");
    for (const theme of darkTheme) {
      theme.style.backgroundColor = "#eee";
      theme.style.color = "black";
    }
  }
};
