function toSite(siteLocation) {

  window.location.href = siteLocation;

}
console.log('running');
function setMargin(writeLocation) {

  console.log(writeLocation);

  writeLocation = document.getElementById(writeLocation);
  writeLocation.classList.add('margin-on');

  console.log(writeLocation);

  if (window.innerWidth <= window.innerHeight) {
    console.log('width <= height');
    writeLocation.classList.remove('margin-on');
    writeLocation.classList.add('margin-off');
  } else {
    console.log('width > height');
  }
}

setMargin('main');