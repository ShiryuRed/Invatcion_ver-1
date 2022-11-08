const iconOpen = document.querySelector(".i__open");

const iconClose = document.querySelector(".i__close");


const navMenu = document.querySelector(".nav__container");

const aMenu = document.querySelectorAll(".nav__a");

let menuOn = false;

for (let i = 0; i < aMenu.length; i++) {
    aMenu[i].addEventListener('click', function() {
      closeMenu();
      noScrollSize();
    });
}


function openMenu(){
  iconClose.style.transform = "scale(1)";
  iconOpen.style.transform = "scale(0)";
  navMenu.classList.toggle("nav__open");
  menuOn = true;
}

function closeMenu(){
  iconClose.style.transform = "scale(0)";
  iconOpen.style.transform = "scale(1)";
  navMenu.classList.toggle("nav__open");
  menuOn = false;
}

iconOpen.addEventListener("click",()=>{
  openMenu();
  noScroll();
})

iconClose.addEventListener("click",()=>{
  closeMenu();
  noScrollSize();
})



body.addEventListener("keydown",(e)=>{
    let key = e.keyCode
    if (key == 27 && menuOn == true) {
    closeMenu();
    noScroll();
    menuOn = false;
    }
});