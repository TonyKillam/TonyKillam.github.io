const cards = document.querySelectorAll(".card");
const overlay = document.getElementById("overlay");

cards.forEach(card => {

  card.addEventListener("mouseenter", () => {
    const gen = card.dataset.gen;

    const backgrounds = {
      silent: "linear-gradient(180deg, #E8D8C3, #D9C2AA)",
      genx: "linear-gradient(180deg, #D9C2AA, #C4A88C)",
      millennial: "linear-gradient(180deg, #C4A88C, #B28E73)",
      genz: "linear-gradient(180deg, #B28E73, #9E755B)"
    };

    document.body.style.background = backgrounds[gen];
  });

});

function openSection(gen) {

  overlay.innerHTML = content[gen] + `<button onclick="closeSection()">Back</button>`;

  overlay.classList.add("active");
}

function closeSection() {
  overlay.classList.remove("active");
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeSection();
  }
});
