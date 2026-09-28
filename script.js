const viewProjects = document.getElementById("view-projects")
const projects = document.getElementById("projects")
const darkModeBtn = document.getElementById("darkModeBtn")

viewProjects.addEventListener("click", () => {
    projects.scrollIntoView({
        behavior: "smooth"
    })
    
    viewProjects.classList.toggle("clicked");
     
     if(viewProjects.classList.contains("clicked")){
       viewProjects.textContent = "Projects Loaded! 🚀"
     }
     else{
        viewProjects.textContent = "View My Projects"
     }; 
})

darkModeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        darkModeBtn.textContent = "☀️ Light Mode";
    } else {
        darkModeBtn.textContent = "🌙 Dark Mode";
    }
})



