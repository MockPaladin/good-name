function toSite(siteLocation) {

  window.location.href = siteLocation;

}

function setMargin(writeLocation) {


  writeLocation = document.getElementById(writeLocation);
  writeLocation.classList.remove('margin-on');
  writeLocation.classList.remove('margin-off');

  if (window.innerWidth <= window.innerHeight) {
    writeLocation.classList.remove('margin-on');
    writeLocation.classList.add('margin-off');
    
  } else {
    writeLocation.classList.remove('margin-off');
    writeLocation.classList.add('margin-on');
  }
}

document.addEventListener('DOMContentLoaded', function() {
  setMargin("main");
  });