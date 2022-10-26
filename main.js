const buttons = document.querySelectorAll(".button");
const aboutSection = document.querySelector(".about_container");
const homeSection = document.querySelector(".home_container");
const educationSection = document.querySelector(".education_container");
const skillsSection = document.querySelector(".skills__container");
const projectsSection = document.querySelector(".projects__container");
const contactSection = document.querySelector(".contact__container");
const readMoreButton = document.querySelectorAll(".projects__button");
const popups = document.querySelectorAll(".popup__wrapper"); 
const closeButton = document.querySelectorAll(".popup__button"); 







buttons.forEach(button => button.addEventListener("click", switched));

function switched(e) {
    const btn = e.target;
    console.log(btn);
    if(btn.classList.contains("home")) {
        homeSection.style.display = "grid";
        aboutSection.style.display = "none";
        educationSection.style.display = "none";
        skillsSection.style.display = "none";
        projectsSection.style.display = "none";
        contactSection.style.display = "none";

    }else if(btn.classList.contains("about")) {
        aboutSection.style.display = "block";
        homeSection.style.display = "none";
        educationSection.style.display = "none";
        skillsSection.style.display = "none";
        projectsSection.style.display = "none";
        contactSection.style.display = "none";

    }else if(btn.classList.contains("education")) {
        educationSection.style.display = "flex";
        homeSection.style.display = "none";
        aboutSection.style.display = "none";
        skillsSection.style.display = "none";
        projectsSection.style.display = "none";
        contactSection.style.display = "none";

    }else if(btn.classList.contains("skills")) {
        skillsSection.style.display = "flex";
        homeSection.style.display = "none";
        aboutSection.style.display = "none";
        educationSection.style.display = "none";
        projectsSection.style.display = "none";
        contactSection.style.display = "none";


    }else if(btn.classList.contains("projects")) {
        projectsSection.style.display = "flex";
        homeSection.style.display = "none";
        aboutSection.style.display = "none";
        educationSection.style.display = "none";
        skillsSection.style.display = "none";
        contactSection.style.display = "none";

    }else if(btn.classList.contains("contact")) {
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

