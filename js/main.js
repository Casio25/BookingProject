import { offers } from "./variables.js";
import { Arrays } from "./sortedArrays.js";


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


export const backendData = await fetch('http://localhost:3000/data')
    .then(function (resp) {
        return resp.json()
    })
    .catch((error) => {
        return `${error}`;
    });

Arrays();

window.addEventListener('load', pageIsLoaded);


validationForm();
mapPopup();
