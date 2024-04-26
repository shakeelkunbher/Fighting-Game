var character = document.getElementById("character");
var margin = 0;
var margin2 = 0;
var character2 = document.getElementById("character2");
function walking() {
  console.log(event.keyCode);
  if (event.keyCode === 68 && margin < 1100) {
    setTimeout(function () {
      character.style.width = "240px"
      character.src = "m-spiderman.gif";
    }, 1000);
    character.src = "spidey-walk1.gif";
    character.style.width = "210px";
    character.style.transform = "scaleX(1)";
    margin = margin + 15;
    character.style.left = margin + "px";
  }

  if (event.keyCode === 65 && margin > 10) {
    setTimeout(function () {
      character.src = "m-spiderman.gif";
    }, 1000);
    character.src = "spidey-walk1.gif";
    character.style.transform = "scaleX(-1)";
    margin = margin - 15;
    character.style.left = margin + "px";
  }

  if (event.keyCode === 17) {
    character.src = "spidet-webball.gif";
    character.style.width = "800px";
    setTimeout(function () {
      character.src = "m-spiderman.gif";
      character.style.width = "250px";
    }, 1000);
  }

  if (event.keyCode === 32) {
    character.style.width = "480px";
    character.src = "spider-sting.gif";
    setTimeout(function () {
      character.style.width = "240px"
      character.src = "m-spiderman.gif";
    }, 2000);
  }

  // second character

  if (event.keyCode === 37 && margin2 < 1140) {
    margin2 = margin2 + 15;
    character2.style.transform = "scaleX(1)";
    character2.src = "than-walk.gif";
    character2.style.right = margin2 + "px";
    setTimeout(function () {
      character2.src = "than-stand.gif";
    }, 1000);
  }

  if (event.keyCode === 39 && margin2 > 11) {
    setTimeout(function () {
      character2.src = "than-stand.gif";
    }, 1000);
    character2.style.transform = "scaleX(-1)";
    character2.src = "than-walk.gif";
    margin2 = margin2 - 15;
    character2.style.right = margin2 + "px";
  }

  if (event.keyCode === 16) {
    character2.src = "than-wins.gif";
    character2.style.width = "5600px !important";
    setTimeout(function () {
      character2.src = "than-stand.gif";
    }, 1400);
  }
}

window.onkeydown = walking;
