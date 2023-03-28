import { offers } from "./variables.js";
import { Arrays } from "./sortedArrays.js";
import { imageForm } from "./image.js";


import { validationForm } from "./validationform.js";
import { mapPopup } from "./map.js";
console.log(offers);

let form = document.querySelector(".ad-form");
let allElements = form.elements;
for (let i = 0, l = allElements.length; i < l; ++i) {
    allElements[i].disabled = true;
}
function pageIsLoaded() {
    for (let i = 0, l = allElements.length; i < l; ++i) {
        allElements[i].disabled = false;
    }
}





Arrays();
imageForm();

window.addEventListener('load', pageIsLoaded);


validationForm();
mapPopup();
