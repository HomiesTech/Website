document.addEventListener("DOMContentLoaded", function () {
  const customUnitsInput = document.getElementById("custom-units-input");
  const customUnitsDisplay = document.getElementById("custom-units");
  const customPriceDisplay = document.getElementById("custom-price");

  const customPricePerUnit = 3000;

  customUnitsInput.addEventListener("input", function () {
    const units = Number(customUnitsInput.value);
    customUnitsDisplay.textContent = units;
    const customPrice = units > 0 ? units * customPricePerUnit : 0;
    customPriceDisplay.textContent = `₹${customPrice}`;
  });
});
