import { createConverter } from "./converters.js";


// Tab switching
document.querySelectorAll(".tab-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-content").forEach(tab => tab.classList.add("hidden"));
    document.getElementById(btn.dataset.tab).classList.remove("hidden");
  });
});

// Helper to parse input
const parseInput = (input) =>
  input.includes(",") ? input.split(",").map(Number) : Number(input);

// Weight
window.convertWeight = (from, to) => {
  const input = parseInput(document.getElementById("weightInput").value);
  const converter = createConverter(from, to);
  document.getElementById("weightResult").textContent = converter(input);
};

