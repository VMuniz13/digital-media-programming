let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".menu");
let menuStatus = false;

menu.style.marginLeft = "-300px";

function menuToggle(){
    if (menuStatus == false) {
        menu.style.marginLeft = "0px";
        menuStatus = true;
    }
    else if (menuStatus == true) {
        menu.style.marginLeft = "-300px";
        menuStatus = flase;
    }
}

menuBtn.onclick = menuToggle;

function bigImg(x) {
    x.style.height = "325px";
    x.style.width = "325px";
  }
  
  function normalImg(x) {
    x.style.height = "150px";
    x.style.width = "150px";
  }

  function myFunction() {
    alert('Hello');
  }