const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

var btnAttribute = btn.getAttribute('class');

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

// Handler for Dark/Light btn
// if classname = dark change to light and and textcontent to lighten and bg color to rgb(0,0,0,0.5)
btn.onclick = function() {
  onclickBtn();
};

function onclickBtn() {
  if (btnAttribute == 'dark'){
    btn.setAttribute("class", "light");
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = (0,0,0,0.5);
  }
}