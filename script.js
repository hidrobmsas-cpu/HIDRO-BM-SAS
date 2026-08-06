// ===============================
// SLIDER AUTOMÁTICO
// ===============================

const slides = document.querySelectorAll(".slide");

let actual = 0;

function cambiarSlide(){

    slides[actual].classList.remove("active");

    actual++;

    if(actual >= slides.length){

        actual = 0;

    }

    slides[actual].classList.add("active");

}

setInterval(cambiarSlide,5000);

// ===============================
// CAMBIO DE COLOR DEL HEADER
// ===============================

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>50){

header.style.background="#ffffff";

header.style.boxShadow="0 5px 20px rgba(0,0,0,.2)";

}else{

header.style.background="rgba(255,255,255,.95)";

header.style.boxShadow="0 5px 20px rgba(0,0,0,.08)";

}

});