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

const bannerImg = document.querySelector('.banner-img');
const arrow_left = document.querySelector('.arrow_left');
const arrow_right = document.querySelector('.arrow_right');


// Gestionnaire d'événement pour le clic sur la flèche gauche
arrow_left.addEventListener('click', () => {console.log("tu as cliqué sur flèche de gauche")})

// Gestionnaire d'événement pour le clic sur la flèche droite
arrow_right.addEventListener('click', () => {console.log("tu as cliqué sur flèche de droite")})
