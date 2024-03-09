$(document).ready(function () {
  var testimonialItem = $(".testimonial-wrapper .testimonial-item");
  var lengthOfItem = testimonialItem.length;
  var counter = 0;

  testimonialItem.hide();
  setTimeout(function () {
    startIteration(counter);
  }, 100);

  function startIteration(counter) {
    testimonialItem.eq(counter).fadeIn("slow", function () {
      if (counter <= lengthOfItem) {
        setTimeout(() => {
          testimonialItem.fadeOut("slow", () => {
            if (counter == lengthOfItem) {
              counter = 0;
            } else {
              counter++;
            }
            setTimeout(() => {
              startIteration(counter);
            }, 500);
          });
        }, 5000);
      }
    });
  }
});

window.onscroll = function () {
  scrollFunction();
};

const themeBtn = document.getElementById("theme-btn");
const darkTheme = document.querySelectorAll("dark-theme");
themeBtn.onclick = () => {
  themeBtn.classList.toggle("fa-sun");
  if (themeBtn.classList.contains("fa-sun")) {
    document.body.classList.add("changeTheme");
    for (const theme of darkTheme) {
      theme.style.backgroundColor = "black";
      theme.style.color = "#eee";
    }
  } else {
    theme.style.backgroundColor = "#eee";
    theme.style.color = "black";
  }
};
