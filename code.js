function toSite(siteLocation) {

  window.location.href = siteLocation;

}

function setMargin(writeLocation) {


  writeLocation = document.getElementById(writeLocation);
  writeLocation.classList.remove('margin-on');
  writeLocation.classList.remove('margin-off');

  if (window.innerWidth <= window.innerHeight) {

    console.log('width <= height');
    writeLocation.classList.remove('margin-on');
    writeLocation.classList.add('margin-off');
    
  } else {
    console.log('width > height');
    writeLocation.classList.remove('margin-off');
    writeLocation.classList.add('margin-on');
  }
}

window.addListenerEvent('load', function() {
  writeLocation.classList.remove('loading')
});