// Affichage de l'animation logo
const slider = document.getElementById("slider");
const images = slider.getElementsByTagName("img");
let currentIndex = 0;
let timer;

const NextImg = () => {
  images[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].classList.add("active");
};

const startMinute = () => {
  timer = setInterval(NextImg, 600);
};

const Stopminute = () => {
  clearInterval(timer);
};

startMinute();
// Animation de départ
function display_c7() {
  let refresh = 1000;
  mytime = setTimeout("display_ct7()", refresh);
}
display_c7();



// Ecouteur d'events sur le click des images
function applyImageCarousel(selector) {
  const images = document.querySelectorAll(selector);

  images.forEach(function (image, index) {
    image.addEventListener("click", function () {
      image.style.display = "none";
      const nextIndex = (index + 1) % images.length;
      images[nextIndex].style.display = "block";

      if (nextIndex === 0) {
        images[0].style.display = "block";
      }
    });
  });
}

// Appliquer le code sur le premier bloc
applyImageCarousel(".myImage");

// Appliquer le code sur le deuxième bloc
applyImageCarousel(".myImage2");
// etc ....
applyImageCarousel(".myImage3");

applyImageCarousel(".myImage4");

applyImageCarousel(".myImage5");
