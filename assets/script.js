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
const bannerImg = document.querySelector('.banner-img');
const arrow_left = document.querySelector('.arrow_left');
const arrow_right = document.querySelector('.arrow_right');
const dots = document.querySelectorAll('.dot'); 

let currentIndex=0;

// Fonction pour mettre à jour les points indicateurs
function updateDots(index) {
    dots.forEach((dot, i) => {
        if (i === index) {                     //si le point est à stricetement égale à l'index
            dot.classList.add('dot_selected'); // Ajoutez la classe pour le point actuel
        } else {
            dot.classList.remove('dot_selected'); // Supprimez la classe pour les autres points
        }
    });
}

// Fonction pour mettre l'image et le texte
function updateCarousel(index, direction) {
  
  // Mettre à jour l'image
  bannerImg.src = `assets/images/slideshow/${slides[currentIndex].image}`;
  bannerImg.alt = `Slide ${currentIndex +1}`;

  // Mettre à jour le texte
  document.querySelector('p').innerHTML = slides[currentIndex].tagLine;
  console.log(`Clic sur la flèche ${direction}`);
}




// Gestionnaire d'événement pour le clic sur la flèche gauche
arrow_left.addEventListener('click', function () {
    currentIndex = (currentIndex - 1);
    updateCarousel(currentIndex, 'left');
    updateDots(currentIndex); // Mettez à jour les points indicateurs
});

// Gestionnaire d'événement pour le clic sur la flèche droite
arrow_right.addEventListener('click', function () {
    currentIndex = (currentIndex + 1) ;
    updateCarousel(currentIndex, 'right');
    updateDots(currentIndex); // Mettez à jour les points indicateurs
});