   // Liste des textes à afficher
   const texts = [
    "Bienvenue sur mon site web",
    "Welcome to my website",
    "欢迎访问我的网站",
    "Bienvenido a mi sitio web",
    "私のウェブサイトへようこそ"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false; // Variable pour savoir si on efface le texte

function typeWriter() {
    const textElement = document.getElementById('welcomeText');
    const currentText = texts[textIndex];

    if (!isDeleting) {
        // Animation d'écriture
        textElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentText.length) {
            // Quand le texte est entièrement écrit, attendre un moment avant d'effacer
            setTimeout(() => isDeleting = true, 1000);
        }
    } else {
        // Animation d'effacement
        textElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false; // Passer au texte suivant
            textIndex = (textIndex + 1) % texts.length;
        }
    }

    // Ajuster la vitesse en fonction de l'état d'écriture ou d'effacement
    const speed = isDeleting ? 50 : 100; // Vitesse plus rapide pour l'effacement
    setTimeout(typeWriter, speed);
}

// Fonction pour changer le texte
function changeText() {
    document.getElementById('welcomeText').textContent = ''; // Effacer le texte actuel
    setTimeout(typeWriter, 800); // Délai avant de commencer l'animation d'écriture
}

// Initialisation : commencer avec le premier texte
changeText();