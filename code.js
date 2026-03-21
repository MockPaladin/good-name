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

  const p = document.getElementById("nav");
  const sections = document.querySelectorAll("section[id]");

  const fragment = document.createDocumentFragment();

  sections.forEach(el => {

    const a = document.createElement("a");
    a.href = `#${el.id}`;

    const heading = el.querySelector("h1, h2, h3");
    a.textContent = heading ? heading.textContent : el.id;

    fragment.appendChild(a);
    });

  p.appendChild(fragment);
  });

window.addEventListener('resize', function() {
  sidebarVisibility();
  });

console.log("JavaScript has finished loading. Hello from random person!");