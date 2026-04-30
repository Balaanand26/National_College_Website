// ===============================
// SELECT ALL INPUTS
// ===============================
const form = document.getElementById("mainForm");

// ===============================
// INPUT FILTER FUNCTION
// ===============================
form.addEventListener("input", function (e) {
  const field = e.target;

  // ===== ALPHABET ONLY FIELDS =====
  const alphaFields = [
    "name",
    "nationality",
    "state",
    "city",
    "fatherName",
    "motherName",
    "fatherJob",
    "motherJob",
    "course",
    "university"
  ];

  // ===== NUMBER ONLY FIELDS =====
  const numberFields = [
    "mobile",
    "altMobile",
    "fatherMobile",
    "motherMobile",
    "fatherPhone",
    "motherPhone",
    "pincode",
    "year",
    "marks"
  ];

  // ===============================
  // APPLY FILTERS
  // ===============================

  // Alphabets only
  if (alphaFields.includes(field.name)) {
    field.value = field.value.replace(/[^A-Za-z ]/g, "");
  }

  // Numbers only
  if (numberFields.includes(field.name)) {
    field.value = field.value.replace(/[^0-9]/g, "");
  }
});





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