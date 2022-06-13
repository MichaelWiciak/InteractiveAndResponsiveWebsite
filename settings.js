function saveSettings(){
  var content = document.getElementById("DarkModetext");
  var final = content.innerText;
  localStorage.setItem("darkModeIndicator", final);
  // get text size
  var elements = document.getElementsByClassName('text');
  var style = window.getComputedStyle(elements[0], null).getPropertyValue('font-size');
  var fontSize = parseFloat(style);
  localStorage.setItem("textSize", fontSize);
  // variable to indicate whether light mode or dark mode is on
  // get variable for background
  var style = window.getComputedStyle(document.body, null).getPropertyValue('background');
  localStorage.setItem("background", style);

}

function loadSettings(){
  var n = localStorage.getItem('darkModeIndicator');
  if (n=="Dark Mode is ON"){
    darkMode();
  }
  else if (n=="Dark Mode is OFF") {
    lightMode();
  }
  var n = localStorage.getItem('textSize');
  if (n!=null){
    var elements = document.getElementsByClassName('text');
    for(var i=0; i< elements.length; i++){
      elements[i].style.fontSize = n + 'px';
    }
  }

  var n = localStorage.getItem('background');
  if (n!=null){
    document.body.style.background = n;
  }
}

window.onload = loadSettings;
