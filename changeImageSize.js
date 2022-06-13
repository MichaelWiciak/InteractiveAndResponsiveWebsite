function makeTextBigger(){
  var elements = document.getElementsByClassName('text');
  for(var i=0; i< elements.length; i++){
    var style = window.getComputedStyle(elements[i], null).getPropertyValue('font-size');
    var fontSize = parseFloat(style);
    if (fontSize+1<30){
    elements[i].style.fontSize = (fontSize + 1) + 'px';}
  }
}

function makeTextSmaller(){
  var elements = document.getElementsByClassName('text');
  for(var i=0; i< elements.length; i++){
    var style = window.getComputedStyle(elements[i], null).getPropertyValue('font-size');
    var fontSize = parseFloat(style);
    if (fontSize-1>5){
    elements[i].style.fontSize = (fontSize - 1) + 'px';}
  }
}
