var photosPottery = ["Travel/1Potterie.jpg","Travel/2Potterie.jpg","Travel/3Potterie.jpg"]
var descPottery = ["Sculpting the freshly made clay","An overview of what was made at the workshop","Making various shapes with the clay"]
var photoFerme = ["Travel/1Ferme.jpg","Travel/2Ferme.jpg","Travel/3Ferme.jpg"]
var descFerme = ["Collecting strawberries","Recording a vlog","First person view of the work"]


var currentIndex = 0;

function changePictures() {
    var photo1 = document.getElementsByClassName("travelPhotos")[0];
    var description1 = document.getElementsByClassName("travelDesc")[0];
    var photo2 = document.getElementsByClassName("travelPhotos")[1];
    var description2 = document.getElementsByClassName("travelDesc")[1];

    currentIndex = (currentIndex + 1) % photosPottery.length; 

    photo1.src = photosPottery[currentIndex];
    description1.textContent = descPottery[currentIndex];

        
    photo2.src = photoFerme[currentIndex];
    description2.textContent = descFerme[currentIndex];
}


var clickPottery = document.getElementById("pottery") ;
clickPottery.addEventListener("click", function() {

    var photo = document.getElementsByClassName("travelPhotos")[0]; 
    var description = document.getElementsByClassName("travelDesc")[0];

    currentIndex = (currentIndex + 1) % photosPottery.length; 
    photo.src = photosPottery[currentIndex];
    description.textContent = descPottery[currentIndex];
})

var clickPottery = document.getElementById("berries") ;
clickPottery.addEventListener("click", function() {

    var photo = document.getElementsByClassName("travelPhotos")[1]; 
    var description = document.getElementsByClassName("travelDesc")[1];

    currentIndex = (currentIndex + 1) % photoFerme.length; 
    photo.src = photoFerme[currentIndex];
    description.textContent = descFerme[currentIndex];
})



setInterval(changePictures, 10000); 

