function sidebarVisibility() {

  const elements = document.getElementsByClassName("sidebar");

  if (window.innerWidth <= 800) {

    for (const element of elements) {
      element.style.display = "none";
    }

  } else {

    for (const element of elements) {
      element.style.display = "revert";
    }
  }
}

document.addEventListener('DOMContentLoaded', function() {
  sidebarVisibility();
  });

window.addEventListener('resize', function() {
  sidebarVisibility();
  });

console.log("JavaScript has finished loading. Hello from random person!");