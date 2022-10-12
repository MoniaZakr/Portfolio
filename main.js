const buttons = document.querySelectorAll(".button");
const aboutSection = document.querySelector(".about_container");
const homeSection = document.querySelector(".home_container");
const educationSection = document.querySelector(".education_container");
const skillsSection = document.querySelector(".skills__Created acontainer");
const projectsSection = document.querySelector(".projects_container");
const contactSection = document.querySelector(".contact")





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
        projectsSection.style.display = "none";
        contactSection.style.display = "none";

    }else if(btn.classList.contains("contact")) {
        contactSection.style.display = "flex";
        homeSection.style.display = "none";
        aboutSection.style.display = "none";
        educationSection.style.display = "none";
        projectsSection.style.display = "none";
    }
}
