const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

/* Looping through images */
for (let i = 1; i < 6; i++) {
  const newImage = document.createElement("img");
  newImage.setAttribute("src", "images/pic" + i + ".jpg");
  thumbBar.appendChild(newImage);

  // this assignes the image to the displayed immage
  newImage.onclick = function() {
    onclickFunction();
  };

  function onclickFunction() {
    displayedImage.src = newImage.src;
  }
}
