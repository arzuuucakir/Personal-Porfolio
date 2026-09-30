const viewProjects = document.getElementById("view-projects");
const projects = document.getElementById("projects");
const darkModeBtn = document.getElementById("darkModeBtn");
const heroTitle = document.getElementById("heroTitle");


// DOM
heroTitle.textContent = "Hello, I'm Arzu!";


// View Projects
viewProjects.addEventListener("click", () => {

    projects.scrollIntoView({
        behavior: "smooth"
    });

    viewProjects.classList.toggle("clicked");

    if (viewProjects.classList.contains("clicked")) {
        viewProjects.textContent = "Projects Loaded! 🚀";
    } else {
        viewProjects.textContent = "View My Projects";
    }

});


// Dark Mode
darkModeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        darkModeBtn.textContent = "☀️ Light Mode";
    } else {
        darkModeBtn.textContent = "🌙 Dark Mode";
    }

    if (document.body.classList.contains("dark")) {
        console.log("Dark Mode is ON 🌙");
    } else {
        console.log("Light Mode is ON ☀️");
    }

});

function showWelcomeMessage() {
    console.log("Welcome to " + name + "'s Portfolio! 🚀");
}

function sayHello(name){
    console.log("Hello" + name + "! 👋");
    sayHello("Arzu")
}