document
  .getElementById("contact_form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = {
      fullName: document.getElementById("your_name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };

    fetch(
      "https://script.google.com/macros/s/AKfycbxxRNaReJu_TRRH8U_u2vOLQIbwhlFFxJmFsF-F_F8I2dhjYyz6OadhxxK3h6H16ZXe/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    )
      .then((response) => response.text())
      .then((data) => {
        console.log("Success:", data);
        alert("Message sent successfully!");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred.");
      });
  });
