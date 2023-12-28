const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

// recherche des variables dans html
const banner_Image = document.querySelector('.banner-image');
const arrow_Left = document.querySelector('.arrow-left');
const arrow_Right = document.querySelector('.arrow-right');
const dots = document.querySelectorAll('.dot'); 

let currentIndex=0;

// Gestionnaire d'événement pour le clic sur la flèche gauche
arrow_Left.addEventListener('click', function () {
    currentIndex = (currentIndex - 1);
    updateCarousel(currentIndex, 'Left');
});

// Gestionnaire d'événement pour le clic sur la flèche droite
arrow_Right.addEventListener('click', function () {
    currentIndex = (currentIndex + 1) ;
    updateCarousel(currentIndex, 'Right');
});


// Fonction pour mettre à jour les points indicateurs
function updateDots(index) {
    dots.forEach((dot, i) => {
        if (i === index) {                     //si le point est à strictement égale à l'index
            dot.classList.add('dot_selected'); // Ajoutez la classe pour le point actuel
        } else {
            dot.classList.remove('dot_selected'); // Supprimez la classe pour les autres points
        }
    });
}


// Fonction pour mettre l'image et le texte
function updateCarousel(_index, direction) {
	//correction du bug pour la première et la dernière image
	if (currentIndex === -1 && direction === 'Left') {
		currentIndex = slides.length - 1; // length nombre de paramètres attendus  
	} else if (currentIndex === slides.length && direction === 'Right') {
		currentIndex = 0;
	}


  // Mettre à jour l'image
  banner_Image .src = `assets/images/slideshow/${slides[currentIndex].image}`;
  banner_Image .alt = `Slide ${currentIndex}`;

  // Mettre à jour le texte
  document.querySelector('p').innerHTML = slides[currentIndex].tagLine;
  console.log(`Clic sur la flèche ${direction}`);
  updateDots(currentIndex); // Mettez à jour les points indicateurs

}
