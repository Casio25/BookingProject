import { offers } from "./variables.js";


import { validationForm } from "./validationform.js";
import { mapPopup } from "./map.js";
console.log(offers);

let form = document.querySelector(".ad-form");
let allElements = form.elements;
for (let i = 0, l = allElements.length; i < l; ++i) {
    // allElements[i].readOnly = true;
    allElements[i].disabled = true;
}
function pageIsLoaded() {
    for (let i = 0, l = allElements.length; i < l; ++i) {
        // allElements[i].readOnly = true;
        allElements[i].disabled = false;
    }
}
window.addEventListener('load', pageIsLoaded);

validationForm();
mapPopup();




