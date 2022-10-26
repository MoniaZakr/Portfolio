"use strict";

var buttons = document.querySelectorAll(".button");
var aboutSection = document.querySelector(".about_container");
var homeSection = document.querySelector(".home_container");
var educationSection = document.querySelector(".education_container");
var skillsSection = document.querySelector(".skills__container");
var projectsSection = document.querySelector(".projects__container");
var contactSection = document.querySelector(".contact__container");
var readMoreButton = document.querySelectorAll(".projects__button");
var popups = document.querySelectorAll(".popup__wrapper");
var closeButton = document.querySelectorAll(".popup__button");
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
    skillsSection.style.display = "none";
    projectsSection.style.display = "none";
    contactSection.style.display = "none";
  } else if (btn.classList.contains("about")) {
    aboutSection.style.display = "block";
    homeSection.style.display = "none";
    educationSection.style.display = "none";
    skillsSection.style.display = "none";
    projectsSection.style.display = "none";
    contactSection.style.display = "none";
  } else if (btn.classList.contains("education")) {
    educationSection.style.display = "flex";
    homeSection.style.display = "none";
    aboutSection.style.display = "none";
    skillsSection.style.display = "none";
    projectsSection.style.display = "none";
    contactSection.style.display = "none";
  } else if (btn.classList.contains("skills")) {
    skillsSection.style.display = "flex";
    homeSection.style.display = "none";
    aboutSection.style.display = "none";
    educationSection.style.display = "none";
    projectsSection.style.display = "none";
    contactSection.style.display = "none";
  } else if (btn.classList.contains("projects")) {
    projectsSection.style.display = "flex";
    homeSection.style.display = "none";
    aboutSection.style.display = "none";
    educationSection.style.display = "none";
    skillsSection.style.display = "none";
    contactSection.style.display = "none";
  } else if (btn.classList.contains("contact")) {
    contactSection.style.display = "flex";
    homeSection.style.display = "none";
    aboutSection.style.display = "none";
    educationSection.style.display = "none";
    skillsSection.style.display = "none";
    projectsSection.style.display = "none";
  }
}

VanillaTilt.init(document.querySelectorAll(".img__wrapper"), {
  max: 25,
  speed: 400
});
readMoreButton.forEach(function (element, index) {
  element.addEventListener('click', function (e) {
    popupFunction(index);
  });
});

function popupFunction(index) {
  popups[index].style.display = "block";
}

closeButton.forEach(function (element, index) {
  element.addEventListener('click', function (e) {
    popupClose(index);
  });
});

function popupClose(index) {
  popups[index].style.display = "none";
}
//# sourceMappingURL=main.dev.js.map
