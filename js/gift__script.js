const modal2 = document.querySelector(".modal-2");

const giftModal = document.querySelector(".modal-gift");

const btnVisa = document.querySelector(".c-visa");

const btnPaypal = document.querySelector(".c-paypal");

const dataInfo = document.querySelector(".data-info");

const giftInfo = document.querySelector(".gift-info");

let visaInfo = true;
let paypalInfo = true;

let modalGiftOn = false;


function giftOn() {
	modal2.removeAttribute("hidden");
    setTimeout(function(){
        modal2.classList.toggle("off");
  }, 20);
    setTimeout(function(){
        giftModal.classList.toggle("off-2");
  }, 200);
	noScroll();
};

function giftOff() {
    giftModal.classList.toggle("off-2");
    setTimeout(function(){
    modal2.setAttribute("hidden", "true");
  }, 400);
  noScroll();
    setTimeout(function(){
        modal2.classList.toggle("off");
  }, 200);
};

function deleteHtml() {
    setTimeout(function(){
        dataInfo.innerHTML = ' ';
  }, 200);
}

function showVisaInfo() {
    if (visaInfo == true) {
        let newHtmlCode = `
            <h3 class="title-gift-modal">Gracias por el apoyo</h3>
            <p>Nume: 1234 1234 1234 1234</p>
            <p>holoa como estas siiuad</p>
            <p>masd cosadas djadafafafaffaf</p>`;
        dataInfo.innerHTML += newHtmlCode;
    } 
}

function showPaypalInfo() {
    if (paypalInfo == true) {
        let newHtmlCode = `
            <h3 class="title-gift-modal">Gracias por el apoyo</h3>
            <p>correo: udadaiff@gmail.com</p>
            <p>hdadsiiuad</p>
            <p>masd djadafafafaffaf</p>`;
        dataInfo.innerHTML += newHtmlCode;
    }
}

giftInfo.addEventListener("click",(e)=> {
    e.stopPropagation();
})

btnVisa.addEventListener("click",()=> {
    giftOn();
    showVisaInfo();
    modalGiftOn = true;
});


btnPaypal.addEventListener("click",()=> { 
	giftOn();
    showPaypalInfo();
    modalGiftOn = true;
});


modal2.addEventListener("click",()=>{
    giftOff();
    deleteHtml();
    modalGiftOn = false;
});


body.addEventListener("keydown",(e)=>{
    let key = e.keyCode
    if (key == 27 && modalGiftOn == true) {
    giftOff();
    deleteHtml();
    modalGiftOn = false;
    }
});
