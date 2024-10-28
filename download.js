document.querySelector(".download-btn-class").addEventListener("click", function () {
    const mainElement = document.getElementById("main-content");
    const returnButton = document.getElementById("return");
    const bottomButtons = document.getElementById("githubbutton");
    

    // Hide the buttons
    if (returnButton) {
        returnButton.classList.add("hidden");
        this.classList.add("hidden"); // Hide the download button using 'this'
        bottomButtons.classList.add("hidden");
    }

    // Get the body background color
    const bodyBgColor = window.getComputedStyle(document.body).backgroundColor;

    // Get the text color from the first <p> element
    const textColor = window.getComputedStyle(document.querySelector("p")).color;

    // Get the project title for the PDF metadata
    const projectTitle = document.getElementById("titleProjet").textContent;

    // Determine PDF orientation based on window width
    const pdfOrientation = window.innerWidth < 1200 ? "p" : "l";

    html2canvas(mainElement, { backgroundColor: null }).then((canvas) => {
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF(pdfOrientation, "mm", "a4");

        const rgbColor = bodyBgColor.match(/\d+/g);
        if (rgbColor) {
            pdf.setFillColor(Number(rgbColor[0]), Number(rgbColor[1]), Number(rgbColor[2]));
            pdf.rect(0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight(), 'F');
        }

        const imgData = canvas.toDataURL("image/png");
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();

        const scaleX = (pdfWidth - 0) / canvas.width;
        const scaleY = (pdfHeight - 0) / canvas.height;
        const scaleFactor = Math.min(scaleX, scaleY) * (pdfOrientation === "p" ? 1.05 : 1.1);

        const adjustedWidth = canvas.width * scaleFactor;
        const adjustedHeight = canvas.height * scaleFactor;

        const xOffset = (pdfWidth - adjustedWidth) / 2;
        const yOffset = (pdfHeight - adjustedHeight) / 2;

        pdf.addImage(imgData, "PNG", xOffset, yOffset, adjustedWidth, adjustedHeight);
        pdf.setTextColor(textColor);
        pdf.setProperties({ title: projectTitle });
        pdf.save(`${projectTitle}.pdf`);

        // Show the buttons again
        if (returnButton) {
            returnButton.classList.remove("hidden");
            this.classList.remove("hidden"); // Show the download button again using 'this'
            bottomButtons.classList.remove("hidden");
        }
    }).catch((error) => {
        console.error("Error capturing content:", error);
        if (returnButton) {
            returnButton.classList.remove("hidden");
        }
        this.classList.remove("hidden"); // Show the download button again
    });
});
