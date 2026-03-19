function toSite(siteLocation) {

  window.location.href = siteLocation;

}

function setMargin(writeLocation) {

  writeLocation = document.querySelectorAll(writeLocation);

  for (let i = 0; i < writeLocation.length; i++) {

    if (window.innerWidth <= 850) {
      writeLocation[i].style.marginLeft = "2.5%";
      writeLocation[i].style.marginRight = "2.5%";
    } else {
      writeLocation[i].style.marginLeft = "20%";
      writeLocation[i].style.marginRight = "20%";
    }
  }


}

document.addEventListener('DOMContentLoaded', function() {
  setMargin("main");
  });

window.addEventListener('resize', function() {
  setMargin("main");
  });

console.log("JavaScript has finished loading. Hello from random person!");