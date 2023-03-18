import { offers } from "./variables.js";


import { validationForm } from "./validationform.js";
import { mapPopup } from "./map.js";
console.log(offers);

const noticeClass = document.querySelector(".notice");
noticeClass.style.display = "none";

function pageIsLoaded(){
    noticeClass.style.display = "block";
}
window.addEventListener('load', pageIsLoaded)

validationForm();
mapPopup();




