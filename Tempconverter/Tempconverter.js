// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
  
  // Get references to elements
  const tempInput = document.getElementById("tempInput");
  const inputUnit = document.getElementById("inputUnit");
  const outputUnit = document.getElementById("outputUnit");
  const convertBtn = document.getElementById("convertBtn");
  const resultDiv = document.getElementById("result");

  // Add event listener to button
  convertBtn.addEventListener("click", function() {
    // Get input value and convert to number
    let tempValue = parseFloat(tempInput.value);

    // If input is empty or invalid, show error
    if (isNaN(tempValue)) {
      resultDiv.innerText = "⚠️ Please enter a valid number!";
      return;
    }

    // Convert input to Celsius first
    let tempInCelsius;
    if (inputUnit.value === "C") {
      tempInCelsius = tempValue;
    } else if (inputUnit.value === "F") {
      tempInCelsius = (tempValue - 32) * 5/9;
    } else if (inputUnit.value === "K") {
      tempInCelsius = tempValue - 273.15;
    }    // Convert Celsius to desired output unit
    let convertedTemp;
    if (outputUnit.value === "C") {
      convertedTemp = tempInCelsius;
    } else if (outputUnit.value === "F") {
      convertedTemp = (tempInCelsius * 9/5) + 32;
    } else if (outputUnit.value === "K") {
      convertedTemp = tempInCelsius + 273.15;
    }

    // Display result with 2 decimal places
    resultDiv.innerText = `Result: ${convertedTemp.toFixed(2)} °${outputUnit.value}`;
  });
});
