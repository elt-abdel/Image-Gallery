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

// Handler for Dark/Light btn
// if classname = dark change to light and and textcontent to lighten and bg color to rgb(0,0,0,0.5)
btn.onclick = function() {
  onClickBtn();
};

function onClickBtn() {
  if (btn.className == "dark") {
    btn.setAttribute("class", "light");
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  } else {
    btn.setAttribute("class", "dark");
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
  }
}
