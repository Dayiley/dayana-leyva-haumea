const today = new Date();
const thisYear = today.getFullYear();

const footer = document.createElement("footer");
const copyright = document.createElement("p");
copyright.innerHTML = `<small>Dayana Leyva &copy; ${thisYear}</small>`;

footer.appendChild(copyright);
document.body.appendChild(footer);


let skills = ["JavaScript", "CSS", "HTML", "Photoshop","Microsoft Office","Root cause analisis","Asset","Problem Solving"];
let skillsSection = document.getElementById("skills");
let skillsList = document.createElement("ul");
skillsSection.appendChild(skillsList);

for (let skill of skills) {
    let skillItem = document.createElement("li");
    skillItem.innerText = skill;
    skillsList.appendChild(skillItem);
}


/*Messages section*/
const messageForm = document.querySelector("[name='leave_message']");
messageForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const usersMessage = event.target.usersMessage.value; 

    const messageSection = document.querySelector("#messages");
    const messageList = messageSection.querySelector("ul");

    const newMessage = document.createElement("li");

    newMessage.innerHTML = `
    <a href=mailto:${usersEmail} >${usersName}</a>
    <span>${usersMessage}</span>
    `;

    const removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.type = "button";

    removeButton.addEventListener("click", function(event) {
    const entry = event.target.parentNode;
    entry.remove();
  });

    newMessage.appendChild(removeButton);
console.info(newMessage)
    messageList.appendChild(newMessage);

    messageForm.reset();
});

/*Project section*/
// Getting DOM elements
const projectsSection = document.querySelector("#projects");
const projectsList = projectsSection.querySelector("ul");

/*https://api.github.com/users/Dayiley/repos*/

/*fetch("https://api.github.com/users/Dayiley/repos")
  .then((res) => {
    if (!res.ok) {
      throw new Error("Something went wrong 😢");
    }
    return res.json();
  })
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      const project = document.createElement("li");
      project.innerText = data[i].name;
      projectsList.appendChild(project);
    }
  })
  .catch((error) => {
    const errorElement = document.createElement("p");
    errorElement.innerText = error.message;
    projectsSection.appendChild(errorElement);
  });*/

  fetch("https://api.github.com/users/Dayiley/repos")
  .then((res) => {
    if (!res.ok) {
      throw new Error("Something went wrong 😢");
    }
    return res.json();
  })
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      const project = document.createElement("li");
      const projectLink = document.createElement("a"); // Crea un elemento <a>
      projectLink.innerText = data[i].name;
      projectLink.href = data[i].html_url; // Establece la URL del proyecto en GitHub
      projectLink.target = "_blank"; // Abre el enlace en una nueva pestaña
      projectLink.rel = "noopener noreferrer"; // Añade rel="noopener noreferrer" por seguridad
      project.appendChild(projectLink); // Agrega el enlace al elemento <li>
      projectsList.appendChild(project); // Agrega el elemento <li> al <ul>
    }
  })
  .catch((error) => {
    const errorElement = document.createElement("p");
    errorElement.innerText = error.message;
    projectsSection.appendChild(errorElement);
  });
