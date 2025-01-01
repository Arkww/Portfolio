document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("toggle");
  const body = document.body;

  // Load the saved mode from local storage
  const savedMode = localStorage.getItem("mode");
  if (savedMode) {
    body.classList.remove("dark", "light"); // Remove any existing mode classes
    body.classList.add(savedMode); // Apply the saved mode class
  } else {
    body.classList.add("light"); // Default to light mode if no saved mode
  }

  // Set the initial state of the checkbox based on the saved mode
  const a = toggle.querySelector(".input");
  a.checked = savedMode === "dark";

  a.addEventListener("click", () => {
    if (body.classList.contains("light")) {
      body.classList.remove("light");
      body.classList.add("dark");
      localStorage.setItem("mode", "dark");
    } else {
      body.classList.remove("dark");
      body.classList.add("light");
      localStorage.setItem("mode", "light");
    }
  });
});







document.addEventListener("DOMContentLoaded", function () {
  const languageSkills = document.querySelectorAll(".image-container");

  languageSkills.forEach((container) => {
    const image = container.querySelector(".languageSkill");
    const text = container.querySelector(".overlay-text");

    image.addEventListener("mouseover", () => {
      if (image.classList.contains("moveX")) {
        image.classList.remove("moveX");
        image.classList.add("moveBack");

        text.style.opacity = "0";
      } else {
        image.classList.add("moveX");
        image.classList.remove("moveBack");
        text.style.opacity = "1";
      }
    });
  });

  const FR = document.getElementsByClassName("FR");
  const EN = document.getElementsByClassName("EN");
  for (let i = 0; i < FR.length; i++) {
    FR[i].addEventListener("click", () => {
      document.documentElement.lang = "fr";
      /**Intro */
      document.getElementById("littleBio").textContent =
        "Etudiant en informatique. Bordeaux, France";
      document.getElementById("buttonT").textContent = "Téléchargez mon CV";
      document.getElementById("undername").textContent =
        "Département informatique de l'IUT de Gradignan, Bordeaux";
      document.getElementById("title").textContent =
        "Mathieu Jay, étudiant en informatique";
      document.getElementsByClassName("bio")[0].textContent =
        " Je suis passionné par les voyages, la théorie des graphes et la programmation en général.";
      document.getElementsByClassName("bio")[1].textContent =
        "En tant que président de l'association des étudiants de mon université, j'aime organiser des événements et gérer mon équipe. J'ai confiance en mes capacités de leadership, qui sont très souvent mises à l'épreuve dans le cadre de mes projets d'équipe.";
      document.getElementsByClassName("bio")[2].textContent =
        "L'apprentissage des langues a toujours été l'une de mes passions. Je suis donc un polyglotte autodidacte et j'aime saisir toutes les occasions qui se présentent à moi pour pratiquer les langues.";
      document.getElementsByClassName("bio")[3].textContent =
        "Je recherche une alternance en développement à partir de juillet 2025.";
      document.getElementById("submitButton").textContent = "Me contacter";

      /**Nav bar */
      document.getElementsByClassName("navclick")[0].textContent =
        "A propos de moi";
      document.getElementsByClassName("navclick")[1].textContent =
        "Mes compétences";
      document.getElementsByClassName("navclick")[2].textContent = "Mes projets";


      /**Contact */
      document.getElementById("submitButton").textContent = "Me contacter";
    });
  }

  for (let i = 0; i < EN.length; i++) {
    EN[i].addEventListener("click", () => {
      document.documentElement.lang = "en";
      /**Intro */
      document.getElementById("littleBio").textContent =
        "Computer science student. Bordeaux, France";
      document.getElementById("buttonT").textContent = "Download my resume";
      document.getElementById("undername").textContent =
        "IUT Computer science department of Gradignan, Bordeaux";
      document.getElementById("title").textContent =
        "Mathieu Jay, computer science student";
      document.getElementsByClassName("bio")[0].textContent =
        " First year student at the IUT of Gradignan, France. I am passionate about travels, the graph theory and programmation in general.";
      document.getElementsByClassName("bio")[1].textContent =
        "Being president of the student association of my university I love to organize events and manage my team. I feel confident in my leadership skills which are very often tested through my team projects";
      document.getElementsByClassName("bio")[2].textContent =
        "Learning languages has always been one of my passions therefore i am a self-taught polyglot and i love to take as many opportunities that i can to practice languages";
      document.getElementsByClassName("bio")[3].textContent =
        "I am looking for an internship in developement starting in july 2025";
      document.getElementById("submitButton").textContent = "Contact me";
      /**Nav bar */
      document.getElementsByClassName("navclick")[0].textContent = "About me";
      document.getElementsByClassName("navclick")[1].textContent = "My skills";
      document.getElementsByClassName("navclick")[2].textContent = "My projects";

      document.getElementById("submitButton").textContent = "Contact me";
  });
}
});
