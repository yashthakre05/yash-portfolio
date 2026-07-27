const text = [
    "Frontend Developer",
    "Web Developer",
    "Java Programmer",
    "IT Graduate"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

    if(count === text.length){
        count = 0;
    }

    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.getElementById("typing").textContent = letter;

    if(letter.length === currentText.length){
        count++;
        index = 0;
        setTimeout(type, 1200);
    }else{
        setTimeout(type, 100);
    }

})();

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

hiddenElements.forEach((el) => observer.observe(el));

const sr = ScrollReveal({
    distance: "60px",
    duration: 1500,
    delay: 200,
    reset: false
});

sr.reveal(".hero-content", { origin: "left" });
sr.reveal(".hero-image", { origin: "right" });
sr.reveal(".about", { origin: "bottom" });
sr.reveal(".skills", { origin: "bottom" });
sr.reveal(".projects", { origin: "bottom" });
sr.reveal(".contact", { origin: "bottom" });