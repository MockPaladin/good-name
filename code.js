function toSite(siteLocation) {

  window.location.href = siteLocation;

}

function setMargin(writeLocation, asdf) {


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
  asdf = document.getElementById(asdf)
  asdf.classList.remove('loading')
  asdf.classList.add('loaded')
}