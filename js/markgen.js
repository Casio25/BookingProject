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
const fragment = new DocumentFragment();



export const cloneOffer = offers.map((e) => getOfferData(e));

function getFeatures(e) {
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

function chooseType(data){
    switch(data){
        case "flat":
            data = "Квартира"
            break;
        case "bungalow":
            data = "Бунгало"
            break;
        case "house":
            data = "Юудинок"
            break;
        case "palace":
            data = "Падац"
            break;
    }
    return data;
}

function showPhotos(listOfPhotos){
    popupPhotos.innerHTML = "";
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
export function getOfferData(e) {
    const cloneTemplate = cardTemplate.content.cloneNode(true).firstElementChild;
    popupAvatar.src = e.author.avatar;
    popupAdress.textContent = `${e.offer.adress.locationX} ${e.offer.adress.locationY}`;
    popupTitle.textContent = e.offer.title;
    popupType.textContent = chooseType(e.offer.type);
    popupPrice.textContent = `${e.offer.price} грн/ніч`;
    popupCapacity.textContent = `${e.offer.rooms} кімнат для ${e.offer.guests} гостей`;
    popupTime.textContent = `Заїзд після ${e.offer.checkin} виїзд до ${e.offer.checkout}`;
    e.offer.features.forEach((feature) => {
        cloneTemplate.querySelector(`.popup__feature--${feature}`).classList.add("hidden");
    });
    popupDescription.textContent = e.offer.description;
    showPhotos(e.offer.photos);
    fragment.appendChild(cloneTemplate);
    return cloneTemplate;


    

    

    
    
    
}
console.log("test");




