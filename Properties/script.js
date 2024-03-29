window.addEventListener("load", function () {
  const slideCount = document.querySelectorAll("#wrapper ul li").length;
  const slideWidth = document.querySelector("#wrapper").offsetWidth;
  const totalWidth = slideCount * slideWidth + "px";
  const slider = document.querySelector("#wrapper ul");
  const next = document.getElementById("next");
  const previous = document.getElementById("prev");

  let leftPosition = 0;
  let counter = 0;
  slider.style.width = totalWidth;

  next.addEventListener("click", function (evt) {
    evt.preventDefault();

    counter++;
    if (counter == slideCount) {
      counter = 0;
      leftPosition = 0;
      slider.style.left = leftPosition;
    } else {
      leftPosition = `-${counter * slideWidth}px`;
      slider.style.left = leftPosition;
    }
  });

  previous.addEventListener("click", function (evt) {
    evt.preventDefault();
    counter--;
    if (counter < 0) {
      counter = slideCount - 1;
      leftPosition = `-${counter * slideWidth}px`;
      slider.style.left = leftPosition;
    } else {
      leftPosition = `-${counter * slideWidth}px`;
      slider.style.left = leftPosition;
    }
  });
});

const themeBtn = document.getElementById("theme-btn");
const darkTheme = document.querySelectorAll(".dark-theme");
themeBtn.onclick = () => {
  themeBtn.classList.toggle("fa-sun");
  if (themeBtn.classList.contains("fa-sun")) {
    document.body.classList.add("changeTheme");
    for (const theme of darkTheme) {
      theme.style.backgroundColor = "#1D1E22";
      theme.style.color = "#eee";
    }
  } else {
    document.body.classList.remove("changeTheme");
    for (const theme of darkTheme) {
      theme.style.backgroundColor = "#eee";
      theme.style.color = "#1D1E22";
    }
  }
};
