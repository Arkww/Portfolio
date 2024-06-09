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

  const FR = document.getElementById("FR");
  const EN = document.getElementById("EN");
  FR.addEventListener("click", () => {
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
      "Je recherche une alternance en développement à partir de septembre 2025, de préférence dans les domaines des graphes ou de la finance.";
    document.getElementById("submitButton").textContent = "Me contacter";

    /**Nav bar */
    document.getElementsByClassName("navclick")[0].textContent =
      "A propos de moi";
    document.getElementsByClassName("navclick")[1].textContent =
      "Mes compétences";
    document.getElementsByClassName("navclick")[2].textContent = "Mes projets";
    /**Skills */
    document.getElementsByClassName("allSkills")[0].textContent = "Compétences";
    document.getElementsByClassName("allSkills")[1].textContent = "Logiciels";
    document.getElementsByClassName("allSkills")[2].textContent = "Langages";
    document.getElementById("climbing").textContent = "Escalade";
    /**Projets légendes */
    document.getElementsByClassName("legende")[0].textContent =
      "Le résultat de l'algorithme d'edge bundling' que j'ai mis en œuvre";
    document.getElementsByClassName("legende")[1].textContent =
      "Le jeu dans sa phase de fonctionnement";
    document.getElementsByClassName("legende")[2].textContent =
      "L'interface en mode pluie fonctionnante";
    document.getElementsByClassName("legende")[3].textContent =
      "Le modèle de la base de données que j'ai créé pour le projet";
    document.getElementsByClassName("legende")[4].textContent =
      "Le site web que j'ai créé. Il a agi comme un interprète entre l'utilisateur et le serveur.";
    /**Projets accroche */
    document.getElementsByClassName("slide-title")[0].textContent =
      "Application java visualisant des graphes";
    document.getElementsByClassName("slide-title")[1].textContent =
      "Code d'un jeu et d'une IA";
    document.getElementsByClassName("slide-title")[2].textContent =
      "Code d'une centrale domotique";
    document.getElementsByClassName("slide-title")[3].textContent =
      "Créer et remplir une base de données";
    document.getElementsByClassName("slide-title")[4].textContent =
      "Récupérer des données d'un serveur pour jouer à un jeu";
    /**Projets description */
    document.getElementById("projectTitle").textContent = "Mes projets";
    /**Graphes */
    document.getElementsByClassName("graph")[0].textContent =
      "Dans ce projet, j'ai codé une application en JAVA capable de créer, de visualiser et d'appliquer des algorithmes à des graphes.";
    document.getElementsByClassName("graph")[1].textContent =
      "J'ai réussi à implémenter l'algorithme de prim pour trouver l'arbre couvrant minimal de n'importe quel graphe donné, mais le point fort du projet a été de coder un algorithme d'edge bundling, pour lequel j'ai codé deux algorithmes de plus court chemin, BFS et Dijkstra.";
    /**PixelWar */
    document.getElementsByClassName("px")[0].textContent =
      "J'ai créé un site web afin de participer à une guerre des pixels avec d'autres étudiants en faisant des requêtes au serveur à l'aide de javascript.";
    document.getElementsByClassName("px")[1].textContent =
      "Cela m'a permis de m'habituer aux outils d'API populaires comme Swagger et m'a appris à faire différents types de requêtes (GET, PUT...).";
    /**Towa */
    document.getElementsByClassName("towa")[0].textContent =
      "J'ai d'abord dû créer un jeu en JAVA en fonction du sujet du projet et le faire fonctionner avec l'interface graphique fournie.";
    document.getElementsByClassName("towa")[1].textContent =
      "Ensuite, j'ai créé une IA pour jouer au jeu et rivaliser avec les IA de tous les autres étudiants. C'était intéressant d'essayer de trouver le meilleur algorithme possible pour le jeu.";
    /**Odomo */
    document.getElementsByClassName("odomo")[0].textContent =
      "Le projet consistait à réécrire le code d'une unité de contrôle domotique en langage JAVA, avec trois modes : pluie, température et chauffage.";
    document.getElementsByClassName("odomo")[1].textContent =
      "Pour chacun de ces mods, j'ai créé et utilisé une matrice booléenne pour afficher l'interface de l'unité de contrôle";
    /**DataBaseSAE */
    document.getElementsByClassName("DBproj")[0].textContent =
      "J'ai créé une base de données pour une librairie fictive en langage SQL et je l'ai remplie avec des données.";
    document.getElementsByClassName("DBproj")[1].textContent =
      "J'ai appris à manipuler correctement les logiciels SQL comme SQL server et à faire un script de création.";
    /**Contact */
    document.getElementById("submitButton").textContent = "Me contacter";
  });

  EN.addEventListener("click", () => {
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
      "I am looking for an internship in developement starting in september 2025, preferably in the fields of graphs or finance";
    document.getElementById("submitButton").textContent = "Contact me";
    /**Nav bar */
    document.getElementsByClassName("navclick")[0].textContent = "About me";
    document.getElementsByClassName("navclick")[1].textContent = "My skills";
    document.getElementsByClassName("navclick")[2].textContent = "My projects";
    /**Skills */
    document.getElementsByClassName("allSkills")[0].textContent = "Skills";
    document.getElementsByClassName("allSkills")[1].textContent = "Softwares";
    document.getElementsByClassName("allSkills")[2].textContent = "Languages";
    document.getElementById("climbing").textContent = "Climbing";
    /**Projets légendes */
    document.getElementsByClassName("legende")[0].textContent =
      "The result of the edge bundling algorithm I implemented";
    document.getElementsByClassName("legende")[1].textContent =
      "The game in it's working stage";
    document.getElementsByClassName("legende")[2].textContent =
      "The interface in rainfall mode working";
    document.getElementsByClassName("legende")[3].textContent =
      "The model of the database that I created for the project";
    document.getElementsByClassName("legende")[4].textContent =
      "The website that i made. It acted like a interpreter between me and the server";
    /**Projets accroche */
    document.getElementsByClassName("slide-title")[0].textContent =
      "Java application visualizing graphs";
    document.getElementsByClassName("slide-title")[1].textContent =
      "Coding a game and an AI";
    document.getElementsByClassName("slide-title")[2].textContent =
      "Code an home automation control";
    document.getElementsByClassName("slide-title")[3].textContent =
      "Make a database and fill it with data";
    document.getElementsByClassName("slide-title")[4].textContent =
      "Fetch data from a server to play a game";
    /**Projets description */
    document.getElementById("projectTitle").textContent = "My projects";
    /**Graphes */
    document.getElementsByClassName("graph")[0].textContent =
      "In this project I coded an application in JAVA that was able to create, visualize and apply algorithms to graphs.";
    document.getElementsByClassName("graph")[1].textContent =
      "I succesfully implemented the prim algorithm to find the minimum spanning tree of any given graph but the highlight of the project was to code an edge bundling algorithm, for which i  coded two shortest path algorithms, BFS and Dijkstra.";
    /**PixelWar */
    document.getElementsByClassName("px")[0].textContent =
      " I created a website in order to participate in a pixel war with other students by making requests to the server using javascript";
    document.getElementsByClassName("px")[1].textContent =
      "This got me used to popular API tools like Swagger and taught me how to do different kinds of requests (GET, PUT..)";
    /**Towa */
    document.getElementsByClassName("towa")[0].textContent =
      "I first had to create a game in JAVA according to the subject of the project and make it work with the graphic interface that was provided.";
    document.getElementsByClassName("towa")[1].textContent =
      "After that I created an AI to play the game and that would compete with the AI's of all the other students. It was really interesting to try to come up with the best algorithm possible for the game.";
    /**Odomo */
    document.getElementsByClassName("odomo")[0].textContent =
      "The project involved rewriting the code for a home automation control unit in JAVA language, with three modes: rainfall, temperature and heating.";
    document.getElementsByClassName("odomo")[1].textContent =
      "For each of these mods I created and used a Boolean matrices to display the control unit's interface";
    /**DataBaseSAE */
    document.getElementsByClassName("DBproj")[0].textContent =
      "I created a database for a fictionnal bookstore in SQL language and filled it with data";
    document.getElementsByClassName("DBproj")[1].textContent =
      "I learned how to properly manipulate SQL Softwares like SQL server and make a creation script";
    /**Contact */
    document.getElementById("submitButton").textContent = "Contact me";
  });
});
