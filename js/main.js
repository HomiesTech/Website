document
  .getElementById("customUnitsInput")
  .addEventListener("input", function (e) {
    const customUnits = e.target.value;
    const customPricePerUnit = 3000;
    const customPrice = customUnits > 0 ? customUnits * customPricePerUnit : 0;

    document.getElementById("custom-units").textContent = customUnits;
    document.getElementById("customPrice").textContent = `₹${customPrice}`;
  });
