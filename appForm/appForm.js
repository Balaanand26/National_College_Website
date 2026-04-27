// PopUp Script js

document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("applyPopup");
  const closeBtn = popup.querySelector(".popup-close");


  function showPopup() {
    popup.classList.add("show");
    setTimeout(() => popup.classList.remove("show"), 8000); // Hide after 8s
  }

  // Initial show after 10s
  setTimeout(showPopup, 500);
  // Repeat every 30s
  setInterval(showPopup, 10000);

  // Click opens modal
  popup.addEventListener("click", (e) => {
    if (!e.target.classList.contains("popup-close")) {
      popup.classList.remove("show");
      applyModal.show();
    }
  });

  // Close button
  closeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    popup.classList.remove("show");
  });
});