function sidebarVisibility() {
// Creates a sidebar for the user to navigate the website //
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

  const button = document.getElementById("menu-toggle");
  const sidebar = document.querySelector(".sidebar");

  button.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    });
    
  });

window.addEventListener('resize', function() {
  sidebarVisibility();
  });

<<<<<<< HEAD
console.log("JavaScript has finished loading. Hello from random person!");
=======
console.log("JavaScript has finished loading. Hello from random person!");


const iframe = document.getElementById("iframe");
window.addEventListener("message", ({ data }) => {
    switch(data.type) {
        case "ready": {
            iframe.contentWindow?.postMessage({
                type: "change-value",
                value: "new initial value"
            }, "*");
            break;
        }
        case "change": {
            console.log("current value is", data.value)
            break;
        }
    }
});
>>>>>>> ab45a1541ed2d1e9335ab3144010b6993869e94c
