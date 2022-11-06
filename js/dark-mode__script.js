const moon = document.querySelector(".i__moon");

const sun = document.querySelector(".i__sun");

const darkMode = document.querySelector(".dark-mode-animation");

const body = document.querySelector(".body");


moon.addEventListener("click",()=>{
  sun.style.transform = "scale(1)";
  moon.style.transform = "scale(0)";
  body.classList.toggle("dark");
  noScroll();
  setTimeout(function(){
    closeMenu();
  }, 400);
})


sun.addEventListener("click",()=>{
  sun.style.transform = "scale(0)";
  moon.style.transform = "scale(1)";
  body.classList.toggle("dark");
  noScroll();
  setTimeout(function(){
    closeMenu();
  }, 400);
})

function noScroll() {
  body.classList.toggle("no-scroll")
}