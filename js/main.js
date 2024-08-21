document
  .getElementById("customUnitsInput")
  .addEventListener("input", function (e) {
    const customUnits = e.target.value;
    const customPricePerUnit = 3000;
    const customPrice = customUnits > 0 ? customUnits * customPricePerUnit : 0;

    document.getElementById("custom-units").textContent = customUnits;
    document.getElementById("customPrice").textContent = `₹${customPrice}`;
  });
document.getElementById("demoVideo").addEventListener("click", function () {
  var video = this;
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});
document.getElementById("video-icon").addEventListener("click", function () {
  const videoPopup = document.querySelector(".video-popup");
  videoPopup.style.display = "flex";

  const video = videoPopup.querySelector("video");
  video.play();
});

document.querySelector(".video-popup").addEventListener("click", function (e) {
  if (e.target === this) {
    this.style.display = "none";
    const video = this.querySelector("video");
    video.pause();
  }
});
