const modal = document.querySelector(".modal");

const imgModal = document.querySelector(".modal-img");

const imgGallery = document.querySelectorAll(".img-gallery");

const imgSrc = document.querySelector(".modal-img-front");



function imgOn() {
	modal.classList.toggle("off");
	setTimeout(function(){
    	imgModal.classList.toggle("off-1");
  }, 400);
	noScroll();
}



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
    });
}



modal.addEventListener("click",()=>{
    imgModal.classList.toggle("off-1");
	setTimeout(function(){
    	modal.classList.toggle("off");
  }, 400);
  noScroll();
})





const imgSrcN = [
	"https://assetsnffrgf-a.akamaihd.net/assets/m/501400102/univ/art/501400102_univ_cnt_3_xl.jpg",
	"https://assetsnffrgf-a.akamaihd.net/assets/m/501400102/univ/art/501400102_univ_cnt_2_xl.jpg",
	"https://assetsnffrgf-a.akamaihd.net/assets/m/1011232/univ/art/1011232_univ_pnr_lg.jpg",
];
