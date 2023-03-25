import { backendData } from "./main.js";
import * as func from "./util.js"
const numberOfShownOffers = 10;
let finishedArray=[]
let filteredByType = [];
let filteredByPrice = [];
let filteredByRoom = [];
let filteredByCapacity = [];
let filterArray = {
    offer:{

    }
}
const typeSelector = document.querySelector("#housing-type");
const priceSelector = document.querySelector("#housing-price");
const roomSelector = document.querySelector("#housing-rooms");
const capacitySelector = document.querySelector("#housing-guests");
export function Arrays(){
    const backendArray = JSON.stringify(backendData);
    const shuffledBackendData = func.shuffle(JSON.parse(backendArray));
    console.log(backendData)
    const slicedDefault = shuffledBackendData.slice(0, numberOfShownOffers);
    /*test part */
    /*functions for filters */
    function typeFilter(e){
        if (e === "any"){
            delete filterArray.offer.type;
        }else{
            filterArray.offer.type = e;
        }
    }
    function roomFilter(e){
        if (e === "any"){
            delete filterArray.offer.rooms;
        }else{
            filterArray.offer.rooms = e;
        }
    }
    function capacityFilter(e){
        if(e ==="any"){
            delete filterArray.offer.guests;
        }else{
            filterArray.offer.guests = e;
        }
    }



    /*eventListeners */
    typeSelector.addEventListener('change', (e) =>{
        typeFilter(e.target.value);
        console.log(filterArray)


    })
    roomSelector.addEventListener('change', (e) =>{
        roomFilter(e.target.value);
        console.log(filterArray);
    })
    capacitySelector.addEventListener('change', (e) =>{
        capacityFilter(e.target.value);
        console.log(filterArray);
    })
}
