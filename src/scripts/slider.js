const imageElement = document.querySelector('.slider__image');

const prevButton = document.querySelector('.slider__button_type_previous');
const nextButon = document.querySelector('.slider__button_type_next');

const imagePaths = ['images/doc1.jpeg', 'images/doc2.jpeg'];

const handleButtonClick = () => {
  if (imageElement.src.includes(imagePaths[1])) imageElement.src = imagePaths[0];
  else imageElement.src = imagePaths[1];
};

prevButton.addEventListener('click', handleButtonClick);
nextButon.addEventListener('click', handleButtonClick);
