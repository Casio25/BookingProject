import { RandomNaturalNumber } from "./util.js"
import * as variables from "./variables.js";
import {  myMarker } from "./map.js";

const houseTypeSelect = document.querySelector('#type');
const priceInput = document.querySelector('#price');
const timein = document.querySelector('#timein');
const timeout = document.querySelector('#timeout');
const capacity = document.querySelector('#capacity');
const roomNumber = document.querySelector('#room_number');
const title = document.querySelector('#title');
const adressInput = document.querySelector('#address');
const description = document.querySelector('#description');


const sendData = async (url, photoData) => {
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(photoData)
    })

    if (!response.ok) {
        throw new Error('sorry')
    }
    return await response.json()
}

export function sendOffer() {

    const photoData = {
        author: {
            avatar: `img/avatars/user0${RandomNaturalNumber(variables.numberOfAvatars.MIN, variables.numberOfAvatars.MAX)}.png`
        },
        offer: {
            adress: adressInput.value,
            checkin: timein.value,
            checkout: timeout.value,
            title: title.value,
            type: houseTypeSelect.value,
            price: priceInput.value,
            guests: capacity.value,
            rooms: roomNumber.value,
            features: [],
            description: description.value,
            photos: [],
        location: {
            x: myMarker.getLatLng().lat,
            y: myMarker.getLatLng().lng,
        }
    }

    };

    JSON.stringify(photoData);
    sendData('http://localhost:3000/data', photoData)
        .then((data) => {

            const objData = JSON.parse(data)
            console.log(objData)
        })
}