document.addEventListener("DOMContentLoaded", function () {
  async function loadLanguage(lang) {
    try {
      const response = await fetch(`./lang/${lang}.json`);

      // Vérifie si la réponse est correcte (code 200)
      if (!response.ok) {
        throw new Error(`Erreur HTTP : ${response.status}`);
      }

      const translations = await response.json();

      // Appliquer les traductions
      document.getElementById("littleBio").textContent = translations.intro.littleBio;
      document.getElementById("buttonT").textContent = translations.intro.buttonT;
      document.getElementById("undername").textContent = translations.intro.undername;
      document.getElementById("title").textContent = translations.intro.title;

      const bioElements = document.getElementsByClassName("bio");
      translations.intro.bios.forEach((bioText, index) => {
        if (bioElements[index]) {
          bioElements[index].textContent = bioText;
        }
      });

      const navItems = document.getElementsByClassName("navclick");
      translations.nav.forEach((navText, index) => {
        if (navItems[index]) {
          navItems[index].textContent = navText;
        }
      });

      document.getElementById("submitButton").textContent = translations.contactButton;

      // Mettre à jour l'attribut de langue HTML
      document.documentElement.lang = lang;

      // Stocker la langue dans le local storage
      localStorage.setItem("preferredLanguage", lang);
    } catch (error) {
      console.error("Erreur lors du chargement de la langue :", error);
    }
  }

  // Fonction pour déterminer la langue à charger
  function determineLanguage() {
    // Vérifier si une langue est déjà stockée dans le local storage
    let lang = localStorage.getItem("preferredLanguage");

    if (!lang) {
      // Si aucune langue n'est stockée, utiliser la langue du navigateur
      const browserLang = navigator.language || navigator.userLanguage;
      lang = browserLang.startsWith("fr") ? "fr" : "en";
    }

    return lang;
  }

  // Charger la langue choisie
  const languageToLoad = determineLanguage();
  loadLanguage(languageToLoad);
});
