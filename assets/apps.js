import { createConverter } from "./converters.js";

//By Romhel Veroy

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

//By Alex Hooks


//By Robert Macklin
 
//Temp Convert
  window.convertTemp = (firstUnit,secondUnit) => {
    var valueToConvert = String(document.getElementById("tempInput").value);
    var valueArray = valueToConvert.split(",");
    var finalValues = [];
    if(firstUnit=="c" && secondUnit=="f") {
      finalValues = valueArray.map((i) => Number(i)*(9/5) + 32);
      var finalString = convertToString(finalValues);
      document.getElementById("tempResult").innerHTML = `The value(s) are ${finalString} degrees Fahrenheit.`;
    } else {
      finalValues = valueArray.map((i) => (Number(i) - 32)/(9/5));
      var finalString = convertToString(finalValues);
      document.getElementById("tempResult").innerHTML = `The value(s) are ${finalString} degrees Celsius.`;
    } 
  }

  function convertToString(array) {
    var finalString = "";
    for(var i=0;i<array.length;i++) {
      if(i!=0) {
       finalString += ", ";
      }
      finalString += String(array[i].toFixed(1));
    }
    return finalString;
  }