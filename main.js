const buttons = document.querySelectorAll(".button");
const aboutSection = document.querySelector(".about_container");
const homeSection = document.querySelector(".home_container");
const educationSection = document.querySelector(".education_container");




buttons.forEach(button => button.addEventListener("click", switched));

function switched(e) {
    const btn = e.target;
    console.log(btn);
    if(btn.classList.contains("home")) {
        homeSection.style.display = "grid";
        aboutSection.style.display = "none";
        educationSection.style.display = "none"
    }else if(btn.classList.contains("about")) {
        homeSection.style.display = "none";
        aboutSection.style.display = "block";
        educationSection.style.display = "none"
    }else if(btn.classList.contains("education")) {
        homeSection.style.display = "none";
        aboutSection.style.display = "none";
        educationSection.style.display = "flex"
    }
}
