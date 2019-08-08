//  sticky nav bar variables

window.onscroll = function() {myFunction()};

var topNav = document.getElementById("topNav");
var sticky = topNav.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    topNav.classList.add("sticky")
  } else {
    topNav.classList.remove("sticky");
  }
}

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    n1RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) n1AddClass(x[i], "show");
  }
}

function n1AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function n1RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

//tabled image gallery

  
  //  sticky nav bar variables
  window.onscroll = function() {myFunction()};

  var topNav = document.getElementById("topNav");
  var sticky = topNav.offsetTop;
  
  function myFunction() {
    if (window.pageYOffset >= sticky) {
      topNav.classList.add("sticky")
    } else {
      topNav.classList.remove("sticky");
    }
  }