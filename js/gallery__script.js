const modal = document.querySelector(".modal");

const imgModal = document.querySelector(".modal-img");

const imgGallery = document.querySelectorAll(".img-gallery");

const imgOutfit = document.querySelectorAll(".img-outfit");

const imgSrc = document.querySelector(".modal-img-front");


let modalImgOn = false;

function imgOn() {
    setTimeout(function(){
        imgModal.classList.toggle("off-1");
  }, 300);
    setTimeout(function(){
        modal.classList.toggle("off");
  }, 20);
    noScroll();
    modal.removeAttribute("hidden");
    modalImgOn = true;
};


function imgOff() {
    imgModal.classList.toggle("off-1");
    setTimeout(function(){
    modal.setAttribute("hidden", "true");
  }, 400);
  noScroll();
    setTimeout(function(){
        modal.classList.toggle("off");
  }, 200);
};



for (let i = 0; i < imgGallery.length; i++) {

    imgGallery[i].addEventListener('click', function() {
      let imageN = i;
      imgOn();
       if (imageN == 0) {
        imgSrc.setAttribute("src", imgSrcN[0]);
      }
     else if (imageN == 1) {
        imgSrc.setAttribute("src", imgSrcN[1]);
     }
     else if (imageN == 2) {
        imgSrc.setAttribute("src", imgSrcN[2]);
     }
     else if (imageN == 3) {
        imgSrc.setAttribute("src", imgSrcN[3]);
     }
    });
};


for (let i = 0; i < imgOutfit.length; i++) {

    imgOutfit[i].addEventListener('click', function() {
      let imageN = i;
      imgOn();
       if (imageN == 0) {
        imgSrc.setAttribute("src", imgSrcO[0]);
      }
     else if (imageN == 1) {
        imgSrc.setAttribute("src", imgSrcO[1]);
     }
     else if (imageN == 2) {
        imgSrc.setAttribute("src", imgSrcO[2]);
     }
    });
};
modal.addEventListener("click",()=>{
    imgOff();
    modalImgOn = false;
});


imgSrc.addEventListener('click',(e)=>{
    e.stopPropagation();
});


const imgSrcN = [
    "https://assetsnffrgf-a.akamaihd.net/assets/m/501400102/univ/art/501400102_univ_cnt_3_xl.jpg",
    "https://assetsnffrgf-a.akamaihd.net/assets/m/501400102/univ/art/501400102_univ_cnt_2_xl.jpg",
    "https://assetsnffrgf-a.akamaihd.net/assets/m/1011232/univ/art/1011232_univ_pnr_lg.jpg",
    "multimedia/images/galery-image/elmiguelon.jpeg",
];


const imgSrcO = [
    "https://assetsnffrgf-a.akamaihd.net/assets/m/501400102/univ/art/501400102_univ_cnt_3_xl.jpg",
    "https://assetsnffrgf-a.akamaihd.net/assets/m/501400102/univ/art/501400102_univ_cnt_2_xl.jpg",
    "https://assetsnffrgf-a.akamaihd.net/assets/m/1011232/univ/art/1011232_univ_pnr_lg.jpg",
];


body.addEventListener("keydown",(e)=>{
    let key = e.keyCode
    if (key == 27 && modalImgOn == true) {
    imgOff();
    modalImgOn = false;
    }
});
