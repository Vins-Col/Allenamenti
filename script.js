function togglePanel(id) {
  const panel = document.getElementById(id);
  panel.style.display = panel.style.display === "block" ? "none" : "block";
}

function animateBars() {
  document.querySelectorAll('.bar').forEach(bar => {
    const value = bar.getAttribute('data-value');
    bar.style.width = value + "%";
  });
}

window.onload = animateBars;

// --- SETTIMANE ---
const weeks = {
  1: `G1 — Fondo Progressivo<br>5’ 5 km/h → ▰▰▱▱▱<br>10’ 7,5 km/h → ▰▰▰▱▱<br>10’ 8 km/h → ▰▰▰▰▱<br>10’ 8,5 km/h → ▰▰▰▰▰<br>5’ cool-down → ▰▱▱▱▱`,
  2: `G1 — Pendenza Iron<br>20’ 6 km/h (11%) → ▰▰▰▰▱<br>10’ 8 km/h → ▰▰▰▱▱`,
  3: `G1 — Fondo + Pendenza Alternata<br>5’ 8 km/h → ▰▰▰▱▱<br>5’ 11% → ▰▰▰▰▱`,
  4: `G1 — Fondo Lungo<br>30’ 8,5–9 km/h → ▰▰▰▰▱`,
  5: `G1 — Fondo Elite<br>35’ 8,5–9 km/h → ▰▰▰▰▱`,
  6: `G1 — Fondo Soft<br>25’ 7,5–8 km/h → ▰▰▱▱▱`
};

function openWeek(n) {
  document.getElementById("week-details").classList.remove("hidden");
  document.getElementById("week-title").innerHTML = "SETTIMANA " + n;
  document.getElementById("week-content").innerHTML = weeks[n];
}

function closeWeek() {
  document.getElementById("week-details").classList.add("hidden");
}
