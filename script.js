function convertTemperature() {
    var celsiusInput = document.getElementById("celsius");
    var fahrenheitInput = document.getElementById("fahrenheit");
  
    // Convert Celsius to Fahrenheit
    var celsius = parseFloat(celsiusInput.value);
    var fahrenheit = (celsius * 9/5) + 32;
  
    // Display the converted temperature in Fahrenheit
    if (!isNaN(fahrenheit)) {
      fahrenheitInput.value = fahrenheit.toFixed(2);
    } else {
      fahrenheitInput.value = "";
    }
  }
  
  function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");
  }
  