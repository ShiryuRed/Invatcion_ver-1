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

const qrContainer = document.getElementById("qr-container");

const qrContainerStyle = document.querySelector(".container__qr-generator");

const QR = new QRCode(qrContainer);

const nombreAsitente = document.querySelector(".nombre-asistencia");



const invitados = [{
    nombre: "Orlando",
    personas: "2",
    mesa: "3"
},{
    nombre: "Natalia",
    personas: "4",
    mesa: "9"
},{
    nombre: "Balbina",
    personas: "3",
    mesa: "10"
},{
    nombre: "Delia",
    personas: "2",
    mesa: "4"
},{
    nombre: "Ioan",
    personas: "5",
    mesa: "1"
},{
    nombre: "Daniel",
    personas: "5",
    mesa: "3"
},{
    nombre: "Esteban",
    personas: "2",
    mesa: "4"
},{
    nombre: "Gerardo",
    personas: "1",
    mesa: "7"
}];

let numer = 0;

/*
let arras = String(qrText)*/

/*for (invitado in invitados) {
    let datos = invitados[invitado];
    var nombre = datos["nombre"];
    var personas = datos["personas"];
    var mesa = datos["mesa"];
    console.log(`Invitado: ${nombre}, Pase: ${personas}, Mesa: ${mesa}`)
}
*/

sendButton.addEventListener("click", (e) => {
    numer = invitationNumber.value;

let nombre = invitados[numer]["nombre"];
let personas = invitados[numer]["personas"];
let mesa = invitados[numer]["mesa"];

    qrContainerStyle.classList.add("anim-qr");
    let qrText =`Invitado: ${nombre},Pase: ${personas},Mesa: ${mesa}`;
    e.preventDefault;
    let confirmar = confirm("¿Confirmar numero de invitacion?");
    if (confirmar) {
        confirmInfo.removeChild(sendButton);
        QR.makeCode(qrText);
    }
    
})