const viewProjects = document.getElementById("view-projects")
const projects = document.getElementById("projects")
const button = document.getElementById("dark-mode")

viewProjects.addEventListener("click", () => {
    projects.scrollIntoView({
        behavior: "smooth"
    })
    
     
     if(viewProjects.classList.contains("clicked")){
       viewProjects.textContent = "Projects Loaded! 🚀"
     }
     else{
        viewProjects.textContent = "View My Projects"
     }
     ;
})

button.addEventListener("click", () => {
    if(button.classList.contains("clicek")){
        button.
    }
})