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
