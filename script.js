(function () {
  const plane = document.getElementById("campusPlane");
  const track = document.querySelector(".campus-scroll-track");
  if (!plane || !track) return;

  let lastScrollY = window.scrollY;
  let isFacingRight = true;

  function onScroll() {
    const trackTop = track.getBoundingClientRect().top + window.scrollY;
    const trackHeight = track.offsetHeight - window.innerHeight;

    const raw = (window.scrollY - trackTop) / trackHeight;
    const progress = Math.min(Math.max(raw, 0), 1);

    const stageW = track.offsetWidth + 200;
    const planeW = plane.offsetWidth;
    const left = -planeW + progress * (stageW + planeW);

    plane.style.left = left - 100 + "px";

    if (window.scrollY > lastScrollY) {
      if (!isFacingRight) {
        plane.style.transition = "transform 0.5s ease";
        plane.style.transform = "translateY(-50%) rotateY(0deg)";
        isFacingRight = true;
      }
    } else {
      if (isFacingRight) {
        plane.style.transition = "transform 0.5s ease";
        plane.style.transform = "translateY(-50%) rotateY(180deg)";
        isFacingRight = false;
      }
    }

    lastScrollY = window.scrollY;
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
  onScroll();
})();



// Loading page

window.onload = function () {
  const preloader = document.getElementById("preloader");

  // 🔒 Lock scroll initially
  document.body.classList.add("no-scroll");

  // Check if loader already shown in this session
  if (sessionStorage.getItem("loaderShown")) {
    preloader.style.display = "none";

    // 🔓 Unlock scroll
    document.body.classList.remove("no-scroll");
    return;
  }

  setTimeout(function () {
    preloader.style.opacity = "0";
    preloader.style.visibility = "hidden";

    sessionStorage.setItem("loaderShown", "true");

    setTimeout(() => {
      preloader.style.display = "none";

      // 🔓 Unlock scroll after loader gone
      document.body.classList.remove("no-scroll");
    }, 1000);
  }, 2300);
};

// Buttons

function showCampus(campus) {
  // hide all
  document.querySelectorAll(".campus-content").forEach((el) => {
    el.classList.remove("active");
  });

  document.querySelectorAll(".campus-btn").forEach((btn) => {
    btn.classList.remove("active");
  });

  // show selected
  document.getElementById(campus).classList.add("active");

  // highlight button
  event.target.classList.add("active");
}


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
