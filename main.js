const buttons = document.querySelectorAll(".button");
const aboutSection = document.querySelector(".about");
const homeSection = document.querySelector(".home");
const educationSection = document.querySelector(".education");
const skillsSection = document.querySelector(".skills");
const projectsSection = document.querySelector(".projects");
const contactSection = document.querySelector(".contact");
const readMoreButton = document.querySelectorAll(".projects__img__button");
const popups = document.querySelectorAll(".projects__popup"); 
const closeButton = document.querySelectorAll(".popup__button"); 







buttons.forEach(button => button.addEventListener("click", switched));

function switched(e) {
    const btn = e.target;
    console.log(btn);
    if(btn.classList.contains("menu__home")) {
        homeSection.style.display = "grid";
        aboutSection.style.display = "none";
        educationSection.style.display = "none";
        skillsSection.style.display = "none";
        projectsSection.style.display = "none";
        contactSection.style.display = "none";

    }else if(btn.classList.contains("menu__about")) {
        aboutSection.style.display = "block";
        homeSection.style.display = "none";
        educationSection.style.display = "none";
        skillsSection.style.display = "none";
        projectsSection.style.display = "none";
        contactSection.style.display = "none";

    }else if(btn.classList.contains("menu__education")) {
        educationSection.style.display = "flex";
        homeSection.style.display = "none";
        aboutSection.style.display = "none";
        skillsSection.style.display = "none";
        projectsSection.style.display = "none";
        contactSection.style.display = "none";

    }else if(btn.classList.contains("menu__skills")) {
        skillsSection.style.display = "flex";
        homeSection.style.display = "none";
        aboutSection.style.display = "none";
        educationSection.style.display = "none";
        projectsSection.style.display = "none";
        contactSection.style.display = "none";


    }else if(btn.classList.contains("menu__projects")) {
        projectsSection.style.display = "flex";
        homeSection.style.display = "none";
        aboutSection.style.display = "none";
        educationSection.style.display = "none";
        skillsSection.style.display = "none";
        contactSection.style.display = "none";

    }else if(btn.classList.contains("menu__contact")) {
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


readMoreButton.forEach((element,index)=>{
    element.addEventListener('click', (e) => {
    popupFunction(index)
    })
})
    
function popupFunction(index) {
    popups[index].style.display = "block";
}

closeButton.forEach((element,index)=>{
    element.addEventListener('click',(e) => {
    popupClose(index)
   })
})
    
function popupClose(index) {
    popups[index].style.display = "none";
}

