const modal = document.querySelector(".modal");

const imgModal = document.querySelector(".modal-img");

const imgGallery = document.querySelector(".img-gallery");

imgGallery.addEventListener("click",()=>{
  modal.classList.toggle("off");
  setTimeout(function(){
    	imgModal.classList.toggle("off-1");
  }, 400);
})

modal.addEventListener("click",()=>{
    imgModal.classList.toggle("off-1");
	setTimeout(function(){
    	modal.classList.toggle("off");
  }, 400);
})