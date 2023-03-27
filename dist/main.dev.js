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
var menu = document.querySelector(".menu");
var closeMark = document.querySelectorAll(".menu__xmark");
var formInput = document.querySelectorAll(".contact__form__input");
var x = window.matchMedia("(max-width: 1012px)");
window.addEventListener("load", function () {
  var splashScreen = document.getElementById("load");
  splashScreen.style.display = "none";
});
buttons.forEach(function (button) {
  return button.addEventListener("click", switched);
});

function switched(e) {
  var btn = e.target;
  console.log(btn);

  if (btn.classList.contains("menu__home")) {
    homeSection.style.display = "flex";
    aboutSection.style.display = "none";
    educationSection.style.display = "none";
    skillsSection.style.display = "none";
    projectsSection.style.display = "none";
    contactSection.style.display = "none";
    homeSectionMedia(x);
  } else if (btn.classList.contains("menu__about")) {
    aboutSection.style.display = "block";
    homeSection.style.display = "none";
    educationSection.style.display = "none";
    skillsSection.style.display = "none";
    projectsSection.style.display = "none";
    contactSection.style.display = "none";
    aboutSectionMedia(x);
  } else if (btn.classList.contains("menu__education")) {
    educationSection.style.display = "flex";
    homeSection.style.display = "none";
    aboutSection.style.display = "none";
    skillsSection.style.display = "none";
    projectsSection.style.display = "none";
    contactSection.style.display = "none";
    educationSectionMedia(x);
  } else if (btn.classList.contains("menu__skills")) {
    skillsSection.style.display = "flex";
    homeSection.style.display = "none";
    aboutSection.style.display = "none";
    educationSection.style.display = "none";
    projectsSection.style.display = "none";
    contactSection.style.display = "none";
    skillsSectionMedia(x);
  } else if (btn.classList.contains("menu__projects")) {
    projectsSection.style.display = "flex";
    homeSection.style.display = "none";
    aboutSection.style.display = "none";
    educationSection.style.display = "none";
    skillsSection.style.display = "none";
    contactSection.style.display = "none";
    projectsSectionMedia(x);
  } else if (btn.classList.contains("menu__contact")) {
    contactSection.style.display = "flex";
    homeSection.style.display = "none";
    aboutSection.style.display = "none";
    educationSection.style.display = "none";
    skillsSection.style.display = "none";
    projectsSection.style.display = "none";
    contactSectionMedia(x);
  }
}

function homeSectionMedia(x) {
  if (x.matches) {
    homeSection.style.display = "flex";
    homeSection.style.maxHeight = "100%";
    homeSection.style.minHeight = "100%";
    homeSection.style.width = "100%";
    homeSection.style.borderRadius = "0";
    homeSection.style.background = "#247364";
    menu.style.display = "none";
  }
}

function aboutSectionMedia(x) {
  if (x.matches) {
    aboutSection.style.display = "block";
    aboutSection.style.maxHeight = "160%";
    aboutSection.style.minHeight = "120%";
    aboutSection.style.width = "100%";
    aboutSection.style.borderRadius = "0";
    aboutSection.style.background = "#247364";
    menu.style.display = "none";
  }
}

function educationSectionMedia(x) {
  if (x.matches) {
    educationSection.style.display = "flex";
    educationSection.style.maxHeight = "150%";
    educationSection.style.minHeight = "100%";
    educationSection.style.width = "100%";
    educationSection.style.borderRadius = "0";
    educationSection.style.background = "#247364";
    menu.style.display = "none";
  }
}

function skillsSectionMedia(x) {
  if (x.matches) {
    skillsSection.style.display = "flex";
    skillsSection.style.minHeight = "150vh";
    skillsSection.style.width = "100%";
    skillsSection.style.borderRadius = "0";
    skillsSection.style.background = "#247364";
    menu.style.display = "none";
  }
}

function projectsSectionMedia(x) {
  if (x.matches) {
    projectsSection.style.display = "flex";
    projectsSection.style.minHeight = "100%";
    projectsSection.style.width = "100%";
    projectsSection.style.borderRadius = "0";
    projectsSection.style.background = "#247364";
    menu.style.display = "none";
  }
}

function contactSectionMedia(x) {
  if (x.matches) {
    contactSection.style.display = "flex";
    contactSection.style.maxHeight = "150%";
    contactSection.style.minHeight = "150%";
    contactSection.style.width = "100%";
    contactSection.style.borderRadius = "0";
    contactSection.style.background = "#247364";
    menu.style.display = "none";
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

function closeWindow() {
  homeSection.style.display = "none";
  aboutSection.style.display = "none";
  educationSection.style.display = "none";
  skillsSection.style.display = "none";
  projectsSection.style.display = "none";
  contactSection.style.display = "none";
  menu.style.display = "grid";
}

closeMark.forEach(function (element) {
  return element.addEventListener("click", closeWindow);
});
formInput.forEach(function (input, value) {
  input.value = "";
});
//# sourceMappingURL=main.dev.js.map
