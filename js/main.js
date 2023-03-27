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


const fetchData = async () => {
    try {
        const response = await fetch('http://localhost:3000/data')
        if (!response.ok) {
            throw new Error('Network response was not ok')
        }
        return await response.json()
    } catch (error) {
        console.log('Fetch error:', error)
        return error
    }
}

const backendData = await fetchData()


Arrays();

window.addEventListener('load', pageIsLoaded);


validationForm();
mapPopup();
