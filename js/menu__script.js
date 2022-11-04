const iconOpen = document.querySelector(".i__open");

const iconClose = document.querySelector(".i__close");


const navMenu = document.querySelector(".nav__container");


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


