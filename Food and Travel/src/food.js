
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("showNone");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
  }
}

function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function RemoveClass(element, name) {
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

var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("bttn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

function elll() {
    alert('Hello');
}

// Header menu
document.addEventListener('DOMContentLoaded', function() {
  var checkbox = document.getElementById('check');
  var menuNav = document.querySelector('.menu-nav');
  menuNav.addEventListener('click', function() {
    checkbox.checked = false;
  });

  var checkboxlist = document.getElementById('check-list');
  var myBtnCtn = document.querySelector("#myBtnContainer ul")
  myBtnCtn.addEventListener('click', function() {
    checkboxlist.checked = false;
  })
  // checkboxlist.onclick = function() {
  //   alert(1);
  // }
});