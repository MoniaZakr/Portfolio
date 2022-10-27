"use strict";

var buttons = document.querySelectorAll(".button");
var aboutSection = document.querySelector(".about");
var homeSection = document.querySelector(".home");
var educationSection = document.querySelector(".education");
var skillsSection = document.querySelector(".skills");
var projectsSection = document.querySelector(".projects");
var contactSection = document.querySelector(".contact");
var readMoreButton = document.querySelectorAll(".projects__img__button");
var popups = document.querySelectorAll(".projects__popup");
var closeButton = document.querySelectorAll(".popup__button");
buttons.forEach(function (button) {
  return button.addEventListener("click", switched);
});

function switched(e) {
  var btn = e.target;
  console.log(btn);

  if (btn.classList.contains("menu__home")) {
    homeSection.style.display = "grid";
    aboutSection.style.display = "none";
    educationSection.style.display = "none";
    skillsSection.style.display = "none";
    projectsSection.style.display = "none";
    contactSection.style.display = "none";
  } else if (btn.classList.contains("menu__about")) {
    aboutSection.style.display = "block";
    homeSection.style.display = "none";
    educationSection.style.display = "none";
    skillsSection.style.display = "none";
    projectsSection.style.display = "none";
    contactSection.style.display = "none";
  } else if (btn.classList.contains("menu__education")) {
    educationSection.style.display = "flex";
    homeSection.style.display = "none";
    aboutSection.style.display = "none";
    skillsSection.style.display = "none";
    projectsSection.style.display = "none";
    contactSection.style.display = "none";
  } else if (btn.classList.contains("menu__skills")) {
    skillsSection.style.display = "flex";
    homeSection.style.display = "none";
    aboutSection.style.display = "none";
    educationSection.style.display = "none";
    projectsSection.style.display = "none";
    contactSection.style.display = "none";
  } else if (btn.classList.contains("menu__projects")) {
    projectsSection.style.display = "flex";
    homeSection.style.display = "none";
    aboutSection.style.display = "none";
    educationSection.style.display = "none";
    skillsSection.style.display = "none";
    contactSection.style.display = "none";
  } else if (btn.classList.contains("menu__contact")) {
    contactSection.style.display = "flex";
    homeSection.style.display = "none";
    aboutSection.style.display = "none";
    educationSection.style.display = "none";
    skillsSection.style.display = "none";
    projectsSection.style.display = "none";
  }
}

VanillaTilt.init(document.querySelectorAll(".projects__img__wrapper"), {
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
