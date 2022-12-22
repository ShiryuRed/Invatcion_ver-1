const modal2 = document.querySelector(".modal-2");

const giftModal = document.querySelector(".modal-gift");

const btnVisa = document.querySelector(".c-visa");

const btnPaypal = document.querySelector(".c-paypal");

const dataInfo = document.querySelector(".data-info");

const giftInfo = document.querySelector(".gift-info");



const modal3 = document.querySelector(".modal-3");
const confirmModal = document.querySelector(".modal-confirm");
const confirmInfo = document.querySelector(".confirm-info");


const btnConfirmA = document.querySelector(".btn-confirm");

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



function attendOn() {
    modal3.removeAttribute("hidden");
    setTimeout(function(){
        modal3.classList.toggle("off");
  }, 20);
    setTimeout(function(){
        confirmModal.classList.toggle("off-2");
  }, 200);
    noScroll();
};

function attendOff() {
    confirmModal.classList.toggle("off-2");
    setTimeout(function(){
    modal3.setAttribute("hidden", "true");
  }, 400);
  noScroll();
    setTimeout(function(){
        modal3.classList.toggle("off");
  }, 200);
};


confirmInfo.addEventListener("click",(e)=> {
    e.stopPropagation();
})


btnConfirmA.addEventListener("click",()=> { 
    attendOn();
    modalGiftOn = true;
});
modal3.addEventListener("click",()=>{
    attendOff();
    modalGiftOn = false;
});



const sendButton = document.querySelector(".btn-send");

const invitationNumber = document.getElementById("number-input");

const confirmarFamilia = document.querySelector(".confirmar-familia");

const qrContainer = document.getElementById("qr-container");

const qrContainerStyle = document.querySelector(".container__qr-generator");

const qrTextStyle = document.querySelector(".text-qr");

const QR = new QRCode(qrContainer);

const nombreAsitente = document.querySelector(".nombre-asistencia");



const invitados = [{
    nombre: "Alcaraz",
    personas: "2",
    mesa: "3"
},{
    nombre: "Álamo",
    personas: "4",
    mesa: "9"
},{
    nombre: "Alarcón",
    personas: "3",
    mesa: "10"
},{
    nombre: "Paz",
    personas: "2",
    mesa: "4"
},{
    nombre: "Bernat",
    personas: "5",
    mesa: "1"
},{
    nombre: "Marin",
    personas: "5",
    mesa: "3"
},{
    nombre: "Alberdi",
    personas: "2",
    mesa: "4"
},{
    nombre: "Castell-Isern",
    personas: "1",
    mesa: "7"
}];


let number = undefined;

let nAN = undefined;

let invalidId = undefined;

let numberId = undefined;

let qrId = undefined;

invitationNumber.addEventListener("input", (e) => {
    number = invitationNumber.value;
    nAN = isNaN(number);
    if (nAN == true || invitados.length <= number || number == '') {
        invalidId = true;
    }
    numberId = parseInt(number);
    qrId = numberId / 4 -1237;
    Math.trunc(qrId);
    invalidId = false; 
    if (Number.isInteger(qrId) == false) {
        invalidId = true;
    }
    return numberId;
})

sendButton.addEventListener("click", (e) => {
    if (number == undefined || invalidId == true || invitados.length <= qrId) {
        qrTextStyle.classList.add("text-qr-anim");
        setTimeout(function(){
            qrTextStyle.classList.remove("text-qr-anim");
      }, 1800);
        invitationNumber.classList.add("input-error-anim");
        setTimeout(function(){
            invitationNumber.classList.remove("input-error-anim");
      }, 1800);
    } else {
        let nombre = invitados[qrId]["nombre"];
        let personas = invitados[qrId]["personas"];
        let mesa = invitados[qrId]["mesa"];

        let qrText =`Invitado: ${nombre},Pases: ${personas},Mesa: ${mesa}`;
        let confirmar = confirm(`¿Confirmar ${number} como numbero de invitacion?`);
        if (confirmar) {
            confirmInfo.removeChild(sendButton);
            qrContainerStyle.classList.add("anim-qr");
            QR.makeCode(qrText);
            let newHtmlCodeFam = `
                <h3>Familia: ${nombre}</h3>`;
            confirmarFamilia.innerHTML += newHtmlCodeFam;
        }
    }
})
invitationNumber.addEventListener("submit", (e) => {
        e.preventDefault;
})/*
for (let i = 0; i <= 150; i++) {
    let loc = (1237 + i) * 4 ;
    document.write(loc + `<br>`)
}*/
