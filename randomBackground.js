function randomColour() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var colour = "rgb(" + x + "," + y + "," + z + ")";
  return colour;
}

function randomBackgroundColour(){
  var c1 = randomColour();
  var c2 = randomColour();
  var c3 = randomColour();
  var gradientColour = "linear-gradient(-37deg, " + c1 + ", " + c2 + ", " + c3 + ") center/cover no-repeat";
  document.body.style.background = gradientColour;

}
