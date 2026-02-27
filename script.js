const cards = document.querySelectorAll(".card");
const overlay = document.getElementById("overlay");

cards.forEach(card => {
  card.addEventListener("click", () => {
    openSection(card.dataset.gen);
  });
});

function openSection(gen) {

  const content = {
    silent: `
      <h1>Silent Generation</h1>
      <p>No video games growing up. Entertainment was physical, outdoor, and face-to-face.</p>
    `,
    genx: `
      <h1>Generation X</h1>
      <p>Arcades and early consoles. Gaming was fun, but not central to identity.</p>
    `,
    millennial: `
      <h1>Millennials</h1>
      <p>Console era & early online play. Gaming became personal and meaningful.</p>
    `,
    genz: `
      <h1>Gen Z</h1>
      <p>Always connected. Gaming is social, cultural, and daily communication.</p>
    `
  };

  overlay.innerHTML = content[gen] + `<button onclick="closeSection()">Back</button>`;
  overlay.style.display = "block";
}

function closeSection() {
  overlay.style.display = "none";
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeSection();
  }
});
