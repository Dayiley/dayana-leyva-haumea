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
