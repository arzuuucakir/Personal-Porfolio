const viewProjects = document.getElementById("view-projects");
const projects = document.getElementById("projects");
const darkModeBtn = document.getElementById("darkModeBtn");
const heroTitle = document.getElementById("heroTitle");
const increaseBtn = document.getElementById("increaseBtn");
const counter = document.getElementById("counter");
const likeBtn = document.getElementById("likeBtn");
const likes = document.getElementById("likes");
const taskInput = document.getElementById("taskInput")
const addTaskBtn = document.getElementById("addTaskBtn")
const taskList = document.getElementById("taskList")
const deleteBtn = document.createElement("button");
const userBtn = document.getElementById("userBtn")
const userCard = document.getElementById("userCard")





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

function showWelcomeMessage(name) {
    console.log("Welcome to " + name + "'s Portfolio! 🚀");
}

function sayHello(name) {
    console.log("Hello" + name + "! 👋");

}

sayHello("Arzu")

function changeTitle() {
    heroTitle.textContent = "Welcome to my Portfolio! 🚀"
}


viewProjects.addEventListener("click", () => {
    changeTitle()



})

let count = 0;

function increaseCount() {
    count = count + 1;
    console.log(count);

}


increaseBtn.addEventListener("click", () => {
    increaseCount();
    counter.textContent = count;
})

let likeCount = 0;

function addLike() {
    likeCount = likeCount + 1;
    likes.textContent = likeCount + " ❤️";
}





//delete button
addTaskBtn.addEventListener("click", () => {

    const task = taskInput.value;

    if (task === "") {
        return;
    }

    const li = document.createElement("li");
    li.textContent = task;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";

    li.addEventListener("click", () => {
        li.style.textDecoration = "line-through";
    });

    deleteBtn.addEventListener("click", () => {
        li.remove();
    });

});

userBtn.addEventListener("click", async () => {

    userCard.innerHTML = "<p>Loading...</p>";
    userBtn.disabled = true;
    userBtn.textContent = "Loading...";

    try {

        const response = await fetch("https://randomuser.me/api/");
        const data = await response.json();

        const user = data.results[0];

        const firstName = user.name.first;
        const lastName = user.name.last;
        const email = user.email;

        userCard.innerHTML = `
        <img src="${user.picture.large}" alt="${firstName}">
        <h3>${firstName} ${lastName}</h3>
        <p>${email}</p>
    `;

    } catch (error) {

        console.log(error);
        userCard.innerHTML = "<p>Something went wrong. Please try again.</p>";

    } finally {
        userBtn.disabled = false;
        userBtn.textContent = "Get Random User";
    }



})