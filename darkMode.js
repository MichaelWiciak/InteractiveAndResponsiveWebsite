function darkMode() {
  var elements = document.getElementsByClassName('text');
  for(var i=0; i< elements.length; i++){
    elements[i].style.backgroundColor="#444B4F";
    elements[i].style.color="white";
  }
  document.body.style.background = "linear-gradient(-37deg, #444B4F, #636C72, #CFD0D0) center/cover no-repeat";
  document.getElementsByClassName('footer')[0].style.backgroundColor="#444B4F";
  document.getElementsByClassName('footer')[0].style.borderTop = "4px dotted Black";
  var elements = document.getElementsByClassName('floatingTextNotFloating');
  for(var i=0; i< elements.length; i++){
    elements[i].style.backgroundColor="#636C72";
    elements[i].style.color="white";
  }
  var elements = document.getElementsByClassName('underlinedEmail');
  for(var i=0; i< elements.length; i++){
    elements[i].style.color="silver";
  }
  var content = document.getElementById("DarkModetext");
  content.innerText = "Dark Mode is ON";

}
function lightMode() {
  var elements = document.getElementsByClassName('text');
  for(var i=0; i< elements.length; i++){
    elements[i].style.backgroundColor="#eee";
    elements[i].style.color="black";
  }
  document.body.style.background   ="linear-gradient(-37deg, #05BBFA, #05FAEF, #9FFFEC) center/cover no-repeat";
  document.getElementsByClassName('footer')[0].style.backgroundColor="#05BBFA";
  document.getElementsByClassName('footer')[0].style.borderTop = "border-top: 4px dotted #9FFFEC";
  var elements = document.getElementsByClassName('floatingTextNotFloating');
  for(var i=0; i< elements.length; i++){
    elements[i].style.backgroundColor="#eee";
    elements[i].style.color="black";
  }
  var elements = document.getElementsByClassName('underlinedEmail');
  for(var i=0; i< elements.length; i++){
    elements[i].style.color="teal";
  }
  var content = document.getElementById("DarkModetext");
  content.innerText = "Dark Mode is OFF";
}
