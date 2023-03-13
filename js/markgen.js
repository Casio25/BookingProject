import { offers } from "./variables.js";

const pops = document.querySelector("#map-canvas");

const cardTemplate = document.querySelector("#card");
const popupAvatar = cardTemplate.content.querySelector(".popup__avatar")
const popupTitle = cardTemplate.content.querySelector(".popup__title");
const popupAdress = cardTemplate.content.querySelector(".popup__text--address");
const popupPrice = cardTemplate.content.querySelector(".popup__text--price");
const popupType = cardTemplate.content.querySelector(".popup__type");
const popupCapacity = cardTemplate.content.querySelector(".popup__text--capacity");
const popupTime = cardTemplate.content.querySelector(".popup__text--time");
const popupWifi = cardTemplate.content.querySelector(".popup__feature--wifi");
const popupDishwasher = cardTemplate.content.querySelector(".popup__feature--dishwasher");
const popupWasher = cardTemplate.content.querySelector(".popup__feature--washer");
const popupParking = cardTemplate.content.querySelector(".popup__feature--parking");
const popupElevator = cardTemplate.content.querySelector(".popup__feature--elevator");
const popupConditioner = cardTemplate.content.querySelector(".popup__feature--conditioner");
const popupDescription = cardTemplate.content.querySelector(".popup__description");
const popupPhotos = cardTemplate.content.querySelector(".popup__photos");
export function showPopup(){


offers.map((e) => checkForUndefined(e));

function getFeatures() {
    for(let i = 0; i < offers.length; i++){
        if (!offers[i].offer.features.includes("wifi")){
            popupWifi.classList.add("hidden")
        } else if (!offers[i].offer.features.includes("dishwasher")){
            popupDishwasher.classList.add("hidden")
        } else if (!offers[i].offer.features.includes("washer")){
            popupWasher.classList.add("hidden")
        } else if (!offers[i].offer.features.includes("parking")){
            popupParking.classList.add("hidden")
        } else if (!offers[i].offer.features.includes("elevator")){
            popupElevator.classList.add("hidden")
        } else if (!offers[i].offer.features.includes("conditioner")){
            popupConditioner.classList.add("hidden")
        }
    }
    
}
function showPhotos(listOfPhotos){
    for(let i = 0; i < listOfPhotos.length; i++){
        const e = document.createElement("img");
        e.setAttribute("width", "45");
        e.setAttribute("height", "40");
        e.setAttribute("alt", "Фото житла");
        e.className = "popup__photo";
        e.setAttribute("src", listOfPhotos[i]);
        popupPhotos.appendChild(e);

    }
}
    function checkForUndefined(object) {
        for (let key in object) {
            if (object[key] !== undefined)
                getOfferData(object);
        }
        return false;
    }

function getOfferData(e) {
    popupAvatar.src = e.author.avatar;
    popupAdress.textContent = `${e.offer.adress.locationX} ${e.offer.adress.locationY}`;
    popupTitle.textContent = e.offer.title;
    popupType.textContent = e.offer.type;
    popupPrice.textContent = `${e.offer.price} грн/ніч`;
    popupCapacity.textContent = `${e.offer.rooms} кімнат для ${e.offer.guests} гостей`;
    popupTime.textContent = `Заїзд після ${e.offer.checkin} виїзд до ${e.offer.checkout}`;
    getFeatures();
    popupDescription.textContent = e.offer.description;
    showPhotos(e.offer.photos);


    

    const cloneTemplate = cardTemplate.content.cloneNode(true);

    
    pops.appendChild(cloneTemplate);
    
}
console.log("test")
}