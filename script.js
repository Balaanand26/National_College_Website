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




// Counter

document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end, duration) {
    let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
        current += increment;
        obj.textContent = current;
        if (current == end) {
          clearInterval(timer);
        }
      }, step);
  }
  counter("count1", 0, 10, 3000);
  counter("count2", 0, 50, 3000);
  counter("count3", 0, 800, 3000);
  counter("count4", 0, 100, 3000);
});


window.onload = function() {
    const preloader = document.getElementById('preloader');

    // Check if loader already shown in this session
    if (sessionStorage.getItem("loaderShown")) {
        // Already shown → hide immediately
        preloader.style.display = "none";
        return;
    }

    // First time (or refresh) → show loader
    setTimeout(function() {

        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';

        // Mark as shown
        sessionStorage.setItem("loaderShown", "true");

        setTimeout(() => {
            preloader.style.display = 'none';
        }, 1000);

    }, 2300);
};


// Buttons 

function showCampus(campus) {
  // hide all
  document.querySelectorAll(".campus-content").forEach(el => {
    el.classList.remove("active");
  });

  document.querySelectorAll(".campus-btn").forEach(btn => {
    btn.classList.remove("active");
  });

  // show selected
  document.getElementById(campus).classList.add("active");

  // highlight button
  event.target.classList.add("active");
}