// JavaScript Document
let form = document.getElementsByTagName('form')[0];
let formKu = document.getElementsByTagName('form')[1];
let textArea = document.getElementsByTagName('textarea')[0];
let textAreaKu = document.getElementsByTagName('textarea')[1];
let myAlert = document.querySelector('.my-alert');


form.addEventListener('submit', cekValidasi);
form.addEventListener('submit', mainkan);
formKu.addEventListener('submit', mainkan2);


function cekValidasi(e){
if(textArea.value===""){
   myAlert.classList.add('d-block');
	e.preventDefault();
 }
}

function mainkan(e){
	responsiveVoice.speak(
    textArea.value,
    "Indonesian Female",
    {
     pitch: 1, 
     rate: 1, 
     volume: 1
    }
   );
	e.preventDefault();
}

function mainkan2(e){
	responsiveVoice.speak(
    textAreaKu.value,
    "Indonesian Female",
    {
     pitch: 1, 
     rate: 1, 
     volume: 1
    }
   );
	e.preventDefault();
}


//const form = document.querySelector("form");
//
//const text = form.querySelector(" textarea");
//
//const speak = (message) => {
//  var speech = new SpeechSynthesisUtterance();
//
//  // Set the text and voice attributes.
//  speech.text = message;
//  speech.volume = 1;
//  speech.rate = 1;
//  speech.pitch = 1;
//
//  window.speechSynthesis.speak(speech);
//};
//
//form.addEventListener("submit", (e) => {
//  e.preventDefault();
//  speak(text.value);
//});






