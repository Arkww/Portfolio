      
      //Ne marche pas !
      
      function scrollToSection(direction) {
            const windowHeight = window.innerHeight;
            const currentPosition = window.scrollY;
            const sections = document.querySelectorAll('section');

            sections.forEach((section, index) => {
                const sectionTop = section.offsetTop;
                const sectionBottom = sectionTop + section.clientHeight;
                
                if (currentPosition >= sectionTop && currentPosition < sectionBottom) {
                    let targetIndex;
                    if (direction === 'down') {
                        targetIndex = index + 1;
                    } else if (direction === 'up') {
                        targetIndex = index - 1;
                        if (targetIndex < 0) {
                            targetIndex = 0;
                        }
                    }

                    const targetSection = sections[targetIndex];
                    if (targetSection) {
                        const targetSectionTop = targetSection.offsetTop;
                        window.scrollTo({
                            top: targetSectionTop,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        }

        // Ajout de l'écouteur d'événement pour détecter le scroll
        window.addEventListener('wheel', (event) => {
            if (event.deltaY > 0) {
                scrollToSection('down'); // Si le scroll est vers le bas
            } else {
                scrollToSection('up'); // Si le scroll est vers le haut
            }
        });