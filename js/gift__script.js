const modal2 = document.querySelector(".modal-2");

const giftModal = document.querySelector(".modal-gift");

const btnVisa = document.querySelector(".c-visa");

const btnPaypal = document.querySelector(".c-paypal");

const dataInfo = document.querySelector(".data-info");

const giftInfo = document.querySelector(".gift-info");


const btnConfirmA = document.querySelector(".btn-confirm");

let visaInfo = true;
let paypalInfo = true;

let modalGiftOn = false;

function test1() {
    alert("Las mentiras caen")
}

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


const mapContainer = document.querySelector(".map-transition");
const mapOn = document.querySelector(".si");

mapOn.addEventListener("click",()=>{
    mapContainer.classList.toggle("map-on")
});

const mapContainer2 = document.querySelector(".map-transition2");
const mapOn2 = document.querySelector(".si2");

mapOn2.addEventListener("click",()=>{
    mapContainer2.classList.toggle("map-on")
});


function showConfirmModal() {
    if (paypalInfo == true) {
        let newHtmlCode = `
              <h3 class="title-gift-modal">Confirmar Asistencia</h3>
            <h3>Nombre</h3>
            <form class="form-invitation">
               <input type="text" id="number-input" class="invitation-number" required>
               <label class="lbl-text">
                  <span class="text-input">Numero de invitacion</span>
               </label>
            </form>
            <div class="container__qr-generator ">
               <div id="qr-container" class="qr-container "></div>
            </div>
            
            <button class="btn-send">Confirmar</button>`;
        dataInfo.innerHTML += newHtmlCode;
    }
}

btnConfirmA.addEventListener("click",()=> { 
    giftOn();
    showConfirmModal();
    modalGiftOn = true;
});


const sendButton = document.querySelector(".btn-send");

const invitationNumber = document.getElementById("number-input");
