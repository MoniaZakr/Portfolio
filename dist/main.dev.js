"use strict";

var buttons = document.querySelectorAll(".button");
var aboutSection = document.querySelector(".about_container");
var homeSection = document.querySelector(".home_container");
var educationSection = document.querySelector(".education_container");
buttons.forEach(function (button) {
  return button.addEventListener("click", switched);
});

function switched(e) {
  var btn = e.target;
  console.log(btn);

  if (btn.classList.contains("home")) {
    homeSection.style.display = "grid";
    aboutSection.style.display = "none";
    educationSection.style.display = "none";
  } else if (btn.classList.contains("about")) {
    homeSection.style.display = "none";
    aboutSection.style.display = "block";
    educationSection.style.display = "none";
  } else if (btn.classList.contains("education")) {
    homeSection.style.display = "none";
    aboutSection.style.display = "none";
    educationSection.style.display = "flex";
  }
}
//# sourceMappingURL=main.dev.js.map
