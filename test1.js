const buttons = document.querySelectorAll(".btn1");
const cards = document.querySelectorAll(".card");

buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        // Remove 'active' class from all buttons
        buttons.forEach(btn => btn.classList.remove("active"));
        // Add 'active' class to the clicked button
        event.target.classList.add("active");

        const skillToFilter = event.target.textContent.trim();
        filterCards(skillToFilter);
    });
});

const filterCards = (skill) => {
    cards.forEach(card => {
        const skills = card.getAttribute("data-skills").split(" ");
        const shouldDisplay = (skill === "All") || skills.includes(skill);
        card.style.display = shouldDisplay ? "flex" : "none";
    });
};

// Initial filter to show all cards
filterCards("All");