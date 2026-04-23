
function filterSelection(category, btn) {
  let items = document.getElementsByClassName("item");

  // 🔸 Filter images
  for (let i = 0; i < items.length; i++) {
    if (category === "all" || items[i].classList.contains(category)) {
      items[i].style.display = "block";
    } else {
      items[i].style.display = "none";
    }
  }

  // 🔸 Remove active from all buttons
  let buttons = document.getElementsByClassName("filter-btn");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }

  // 🔸 Add active to clicked button
  btn.classList.add("active");
}