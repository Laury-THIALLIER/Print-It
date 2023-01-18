const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

imgNumber = 0;

for (i = 0; i < slides.length; i++) {
  dot = document.createElement("i");
  dot.setAttribute("class", "dot");
  document.querySelector(".dots").appendChild(dot);
}

dots = document.querySelectorAll(".dot");
dots[imgNumber].setAttribute("class", "dot dot_selected");

document.getElementById("arrow_left").addEventListener("click", () => {
  imgNumber--;
  document
    .querySelector(".banner-img")
    .setAttribute(
      "src",
      "./assets/images/slideshow/" + slides[imgNumber]["image"]
    );
  document.getElementById("tagline").innerHTML = slides[imgNumber]["tagLine"];
  dots.forEach((dot) => {
    dot.setAttribute("class", "dot");
  });
  dots[imgNumber].setAttribute("class", "dot dot_selected");
});

document.getElementById("arrow_right").addEventListener("click", () => {
  imgNumber++;
  document
    .querySelector(".banner-img")
    .setAttribute(
      "src",
      "./assets/images/slideshow/" + slides[imgNumber]["image"]
    );
  document.getElementById("tagline").innerHTML = slides[imgNumber]["tagLine"];
  dots.forEach((dot) => {
    dot.setAttribute("class", "dot");
  });
  dots[imgNumber].setAttribute("class", "dot dot_selected");
});
