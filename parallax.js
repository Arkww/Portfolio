// main.js
const parallaxImage = document.querySelector("#stop");

// Vitesse de déplacement en pixels par frame
const speed = 0.1;

// Valeurs initiales pour les translations
let x = 0;
let y = 0;

// Durée du mouvement dans une direction (en pixels)
const movementDuration = 30;

// Décompte pour savoir quand changer de direction
let counter = 0;

// Directions diagonales : 0 = haut-droite, 1 = bas-droite, 2 = bas-gauche, 3 = haut-gauche
let direction = 0;

// Fonction de mise à jour de l'animation
function update() {
  // Déplacer selon la direction actuelle
  switch (direction) {
    case 0: // Haut-droite
      x += speed;
      y -= speed;
      break;
    case 1: // Bas-droite
      x += speed;
      y += speed;
      break;
    case 2: // Bas-gauche
      x -= speed;
      y += speed;
      break;
    case 3: // Haut-gauche
      x -= speed;
      y -= speed;
      break;
  }

  // Appliquer la transformation
  parallaxImage.style.transform = `translate(${x}px, ${y}px)`;

  // Incrémenter le compteur
  counter += speed;

  // Changer de direction après avoir atteint la durée de mouvement
  if (counter >= movementDuration) {
    direction = (direction + 1) % 4; // Passer à la direction suivante
    counter = 0; // Réinitialiser le compteur
  }

  // Demander une nouvelle animation frame
  requestAnimationFrame(update);
}

// Démarrer l'animation
update();