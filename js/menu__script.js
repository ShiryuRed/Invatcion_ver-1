const iconOpen = document.querySelector(".i__open");

const iconClose = document.querySelector(".i__close");


const navMenu = document.querySelector(".nav__container");

const aMenu = document.querySelectorAll(".nav__a");



for (let i = 0; i < aMenu.length; i++) {

    aMenu[i].addEventListener('click', function() {
      closeMenu();
    });
}


function openMenu(){
  iconClose.style.transform = "scale(1)";
  iconOpen.style.transform = "scale(0)";
  navMenu.classList.toggle("nav__open");
}

function closeMenu(){
  iconClose.style.transform = "scale(0)";
  iconOpen.style.transform = "scale(1)";
  navMenu.classList.toggle("nav__open");
}

iconOpen.addEventListener("click",()=>{
  openMenu();
})

iconClose.addEventListener("click",()=>{
  closeMenu();
})

