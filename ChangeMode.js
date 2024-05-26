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

    text.addEventListener("click", () => {
      text.style.opacity = "0";
    });
  });

  const FR = document.getElementById("FR");
  const EN = document.getElementById("EN");
  FR.addEventListener("click", () => {
    document.documentElement.lang = "fr";
    /**Intro */
    document.getElementById("undername").textContent =
      "Département informatique de l'IUT de Gradignan";
    document.getElementById("title").textContent =
      "Mathieu Jay, étudiant en informatique à l'IUT de Gradignan";
    document.getElementsByClassName("bio")[0].textContent =
      "Etudiant en première année à l'IUT de Gradignan je suis passioné de voyage et de théorie des graphes.";

    /**Nav bar */
    document.getElementsByClassName("navclick")[0].textContent =
      "A propos de moi";
    document.getElementsByClassName("navclick")[1].textContent =
      "Mes compétences";
    document.getElementsByClassName("navclick")[2].textContent = "Mes projets";
    document.getElementsByClassName("navclick")[3].textContent =
      "Contacter-moi";
    /**Skills */
    document.getElementsByClassName("allSkills")[0].textContent = "Compétences";
    document.getElementsByClassName("allSkills")[1].textContent = "Logiciels";
    document.getElementsByClassName("allSkills")[2].textContent = "Langages";
    document.getElementById("climbing").textContent = "Escalade";
    /**Projets légendes */
    document.getElementsByClassName("legende")[0].textContent =
      "Ce projet sur les graphes a été un excellent moyen d'en apprendre davantage sur les graphes et les algorithmes.";
    document.getElementsByClassName("legende")[1].textContent =
      "Le site web que j'ai créé. Il a agi comme un interprète entre moi et le serveur.";
    document.getElementsByClassName("legende")[2].textContent =
      "L'interface graphique du jeu fonctionnant";
    document.getElementsByClassName("legende")[3].textContent =
      "L'utilisateur saisit les plages horaires qu'il souhaite activer et celles-ci sont ajoutées à la matrice avant d'être affichées par le programme.";
    /**Projets accroche */
    document.getElementsByClassName("slide-title")[0].textContent =
      "Développement d'une application capable de visualiser et de manipuler des graphiques";
    document.getElementsByClassName("slide-title")[1].textContent =
      "Créer un site web et adresser des requêtes à un serveur avec JavaScript";
    document.getElementsByClassName("slide-title")[2].textContent =
      "Code d'un jeu et développement d'une IA pour jouer et rivaliser avec les autres étudiants.";
    document.getElementsByClassName("slide-title")[3].textContent =
      "L'utilisateur saisit les plages horaires qu'il souhaite activer et celles-ci sont ajoutées à la matrice avant d'être affichées par le programme.";
    /**Projets description */
    document.getElementById("projectTitle").textContent = "Mes projets";
    /**Graphes */
    document.getElementsByClassName("slide-date")[0].textContent =
      "Projet graphes";
    document.getElementsByClassName("graph")[0].textContent =
      "Dans ce projet, j'ai codé une application en JAVA capable de créer, de visualiser et d'appliquer des algorithmes à des graphes.";
    document.getElementsByClassName("graph")[1].textContent =
      "La représentation d'un graphique en JAVA a été un véritable défi, mais j'ai beaucoup appris sur ma partie préférée des mathématiques grâce à ce sujet.";
    document.getElementsByClassName("graph")[2].textContent =
      "J'ai réussi à implémenter l'algorithme prim pour trouver l'arbre minimal de n'importe quel graphe donné, mais le point fort du projet a été de coder un algorithme de regroupement des arêtes.";
    /**PixelWar */
    document.getElementsByClassName("px")[0].textContent =
      "J'ai créé un site web pour participer à une guerre des pixels avec d'autres élèves.";
    document.getElementsByClassName("px")[1].textContent =
      "J'ai dû lire beaucoup de documentation pour comprendre comment faire des requêtes au serveur et comment manipuler les données qui m'étaient renvoyées. Cela m'a permis de me familiariser avec des outils d'API populaires comme Swagger et m'a appris à faire différents types de requêtes (GET, PUT..).";
    /**Towa */
    document.getElementsByClassName("towa")[0].textContent =
      "Un projet en deux phases, je devais d'abord créer un jeu en JAVA en fonction du sujet du projet et le faire fonctionner avec l'interface graphique fournie. Réfléchir à la manière dont j'allais réaliser les phases suivantes du jeu a vraiment développé mes compétences en matière de résolution de problèmes.";
    document.getElementsByClassName("towa")[1].textContent =
      "Une fois cette phase terminée, j'ai créé une IA pour jouer au jeu et qui devait rivaliser avec les IA de tous les autres étudiants. C'était vraiment intéressant d'essayer de trouver le meilleur algorithme possible pour le jeu. J'ai réussi à me classer dans le top 3 du tournoi malgré une concurrence féroce.";
    /**Odomo */
    document.getElementsByClassName("odomo")[0].textContent =
      "Le projet Odomo consistait à réécrire le code d'une unité de contrôle domotique en langage JAVA, avec trois modes : pluie, température et chauffage.";
    document.getElementsByClassName("odomo")[1].textContent =
      "Pour chacun de ces modes, j'ai dû créer et utiliser une matrice booléenne pour afficher l'interface de l'unité de contrôle.";
    document.getElementsByClassName("odomo")[2].textContent =
      "Cela m'a vraiment aidé à comprendre et à manipuler les matrices en JAVA, ainsi qu'à adapter et à comprendre le code existant que je n'avais pas codé.";
    /**Contact */
    document.getElementById("contactTitle").textContent = "Contacter-moi";
    document.getElementById("name").placeholder = "NOM";
    document.getElementById("submitButton").textContent = "Envoyer";
  });

  EN.addEventListener("click", () => {
    document.documentElement.lang = "en";
    /**Intro */
    document.getElementById("undername").textContent =
      "IUT Computer science department of Gradignan";
    document.getElementById("title").textContent =
      "Mathieu Jay, computer science student";
    document.getElementsByClassName("bio")[0].textContent =
      "          First year student at the IUT of Gradignan, France. I am passionate about travels and the graph theory.";
    /**Nav bar */
    document.getElementsByClassName("navclick")[0].textContent = "About me";
    document.getElementsByClassName("navclick")[1].textContent = "My skills";
    document.getElementsByClassName("navclick")[2].textContent = "My projects";
    document.getElementsByClassName("navclick")[3].textContent = "Contact me";
    /**Skills */
    document.getElementsByClassName("allSkills")[0].textContent = "Skills";
    document.getElementsByClassName("allSkills")[1].textContent = "Softwares";
    document.getElementsByClassName("allSkills")[2].textContent = "Languages";
    document.getElementById("climbing").textContent = "Climbing";
    /**Projets légendes */
    document.getElementsByClassName("legende")[0].textContent =
      "The graph project was a great way to learn about graphs and algorithms";
    document.getElementsByClassName("legende")[1].textContent =
      "The website that i made. It acted like a interpreter between me and the server";
    document.getElementsByClassName("legende")[2].textContent =
      "The graphic interface of the game working";
    document.getElementsByClassName("legende")[3].textContent =
      "The user enters the timeslots he wants to switch on and they are added to the matrix before being displayed by the program";
    /**Projets accroche */
    document.getElementsByClassName("slide-title")[0].textContent =
      "Developping an application capable of visualizing and manipulating graphs";
    document.getElementsByClassName("slide-title")[1].textContent =
      "Create a website and make requests to a server with JavaScript";
    document.getElementsByClassName("slide-title")[2].textContent =
      "Code of a game and developement of an AI to play and compete with the others students";
    document.getElementsByClassName("slide-title")[3].textContent =
      "The user enters the timeslots he wants to switch on and they are added to the matrix before being displayed by the program.";
    /**Projets description */
    document.getElementById("projectTitle").textContent = "My projects";
    /**Graphes */
    document.getElementsByClassName("slide-date")[0].textContent =
      "Graph project";
    document.getElementsByClassName("graph")[0].textContent =
      "In this project i coded an application in JAVA that was able to create, visualize and apply algorithms to graphs.";
    document.getElementsByClassName("graph")[1].textContent =
      "It was challenging to represent a graph in JAVA but i learned a lot on my favourite part of mathematics through this subject.";
    document.getElementsByClassName("graph")[2].textContent =
      "I succesfully implemented the prim algorithm to find the minimum spanning tree of any given graph but the highlight of the project was to code an edge bundling algorithm.";
    /**PixelWar */
    document.getElementsByClassName("px")[0].textContent =
      "I created a website in order to participate in a pixel war with other students";
    document.getElementsByClassName("px")[1].textContent =
      "I had to read a lot of documentation to understand how to make requests to the server and how to manipulate the data that was sent back to me. This gets me to get familliar with popular API tools like Swagger and taught me how to do different kinds of requests (GET, PUT..)";
    /**Towa */
    document.getElementsByClassName("towa")[0].textContent =
      "A project with two phases, i first had to create a game in JAVA according to the subject of the project and make it work with the graphic interface that was provided. Thinking about how i was going to make the next phases of the game really developped my problem-solving skills";
    document.getElementsByClassName("towa")[1].textContent =
      "Once this phase ended i created an AI to play the game and that would compete with the AI's of all the other students. It was really interesting to try to come up with the best algorithm possible for the game, i managed to squeeze in the top 3 of the tournament even though the competition was fierce";
    /**Odomo */
    document.getElementsByClassName("odomo")[0].textContent =
      "The Odomo project involved rewriting the code for a home automation control unit in JAVA language, with three modes: rainfall, temperature and heating.";
    document.getElementsByClassName("odomo")[1].textContent =
      "Which each of these mods we had to create and use a Boolean matrices to display the control unit's interface.";
    document.getElementsByClassName("odomo")[2].textContent =
      "This really helped me to understand and manipulate matrices in JAVA, as well as to adapt and understand existing code that I hadn't coded.";
    /**Contact */
    document.getElementById("contactTitle").textContent = "Contact me";
    document.getElementById("name").placeholder = "NAME";
    document.getElementById("submitButton").textContent = "Send";
  });
});

