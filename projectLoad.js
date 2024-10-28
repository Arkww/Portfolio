document.addEventListener('DOMContentLoaded', () => {
    // Selection of project cards
    const projectCards = document.querySelectorAll('.card');

    projectCards.forEach(card => {
        card.addEventListener('click', event => {
            event.preventDefault();

            // Get the project name from the data-project attribute
            const project = card.getAttribute('data-project');
            const jsonFilePath = `ProjetEN/${project}EN.json`; // Modify the path as needed

            // Navigate to template.html with the JSON path as a URL parameter
            window.location.href = `template.html?json=${encodeURIComponent(jsonFilePath)}`;
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Retrieve the json parameter from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const jsonFilePath = urlParams.get('json');

    if (jsonFilePath) {
        fetch(jsonFilePath)
            .then(response => response.json())
            .then(data => {
                // Update page elements with JSON data
                const titleProjet = document.getElementById('titleProjet');
                const littleTitleProjet = document.getElementById('littleTitleProjet');
                const resultRecap = document.getElementById('resultRecap');

                // Set the document title to the project title
                if (data.titleProjet) {
                    document.title = data.titleProjet; // Set page title
                    titleProjet.textContent = data.titleProjet;
                } else {
                    titleProjet.parentElement.style.display = 'none'; // Hide the title if absent
                }

                if (data.littleTitleProjet) {
                    littleTitleProjet.textContent = data.littleTitleProjet;
                } else {
                    littleTitleProjet.parentElement.style.display = 'none'; // Hide the little title if absent
                }

                // Result Recap
                if (data.resultRecap) {
                    resultRecap.textContent = data.resultRecap;
                } else {
                    resultRecap.parentElement.style.display = 'none'; // Hide recap if absent
                }

                // Skills
                const skillsList = document.querySelectorAll('#competenceProjet li');
                let hasSkills = false; // Track if any skill is present

                if (data.skills && data.skills.length) {
                    skillsList.forEach((li, index) => {
                        if (data.skills[index]) {
                            li.textContent = data.skills[index];
                            li.style.display = ''; // Show present skills
                            hasSkills = true; // Set flag to true if at least one skill exists
                        } else {
                            li.style.display = 'none'; // Hide unused elements
                        }
                    });
                }

                if (!hasSkills) {
                    document.querySelector('#competenceProjet').style.display = 'none'; // Hide section if no skills
                }

                // Technologies
                const technoList = document.querySelectorAll('#technoProjet li');
                let hasTechnologies = false; // Track if any technology is present

                if (data.technologies && data.technologies.length) {
                    technoList.forEach((li, index) => {
                        if (data.technologies[index]) {
                            li.textContent = data.technologies[index];
                            li.style.display = ''; // Show present technologies
                            hasTechnologies = true; // Set flag to true if at least one technology exists
                        } else {
                            li.style.display = 'none'; // Hide unused elements
                        }
                    });
                }

                if (!hasTechnologies) {
                    document.querySelector('#technoProjet').style.display = 'none'; // Hide section if no technologies
                }

                // Images
                const photoProjetDiv = document.getElementById('photoProjet');
                photoProjetDiv.innerHTML = ''; // Clear previous images
                let hasImages = false; // Track if any valid images are present

                if (data.photoProjet && data.photoProjet.length) {
                    data.photoProjet.forEach(photo => {
                        if (photo.src) { // Check if photo has a valid src
                            hasImages = true; // Set flag to true if at least one valid image exists
                            const img = document.createElement('img');
                            img.src = photo.src;
                            const desc = document.createElement('p');
                            desc.className = 'imgDesc';
                            desc.textContent = photo.desc || ""; // Set description if exists
                            photoProjetDiv.appendChild(img);
                            photoProjetDiv.appendChild(desc);
                        }
                    });
                }

                // Hide photo section if no images are present
                if (!hasImages) {
                    photoProjetDiv.style.display = 'none'; // Hide if no photos are present
                }

                // Links
                const githubButton = document.getElementById('githubbutton');
                if (data.githubLink) {
                    githubButton.href = data.githubLink; // Set the GitHub link
                    githubButton.style.display = ''; // Show the button
                } else {
                    githubButton.style.display = 'none'; // Hide if no link
                }

                const downloadButton = document.getElementById('download-button');
                if (data.downloadButtonText) {
                    downloadButton.textContent = data.downloadButtonText;
                    downloadButton.style.display = ''; // Show the download button
                } else {
                    downloadButton.style.display = 'none'; // Hide if no download text
                }

                // Optional: Hide any other elements that are not included in the JSON
                // Example:
                // const someOtherElement = document.getElementById('someElement');
                // if (!data.someProperty) {
                //     someOtherElement.style.display = 'none';
                // }

            })
            .catch(error => console.error('Error loading JSON:', error));
    }
});
