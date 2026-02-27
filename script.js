const tiles = document.querySelectorAll(".tile");
let currentIndex = 0;

document.addEventListener("keydown", (e) => {

  if (e.key === "ArrowRight") {
    move(1);
  }

  if (e.key === "ArrowLeft") {
    move(-1);
  }

});

function move(direction) {
  tiles[currentIndex].classList.remove("active");
  currentIndex += direction;

  if (currentIndex < 0) currentIndex = tiles.length - 1;
  if (currentIndex >= tiles.length) currentIndex = 0;

  tiles[currentIndex].classList.add("active");
}
