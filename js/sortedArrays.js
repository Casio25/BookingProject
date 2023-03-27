
import * as func from "./util.js"
const numberOfShownOffers = 10;

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
/**test function */

let filterArray = {
    offer:{
        features:[],
        

    }
}
let filteredData = {};
const typeSelector = document.querySelector("#housing-type");
const priceSelector = document.querySelector("#housing-price");
const roomSelector = document.querySelector("#housing-rooms");
const capacitySelector = document.querySelector("#housing-guests");
const featureCheckbox = document.querySelectorAll('#housing-features input[type="checkbox"]');
const featureSelector = document.querySelector('#housing-features');
const backendData = await fetchData()
const backendArray = JSON.stringify(backendData);
const shuffledBackendData = JSON.parse(backendArray);

const slicedDefault = shuffledBackendData.slice(0, numberOfShownOffers);

export async function Arrays() {

    
    /*test part */

    /*functions for filters */
    function typeFilter(e) {
        if (e === "any") {
            delete filterArray.offer.type;
        } else {
            filterArray.offer.type = e;
        }
    }
    function roomFilter(e) {
        if (e === "any") {
            delete filterArray.offer.rooms;
        } else {
            filterArray.offer.rooms = Number(e);
        }
    }
    function capacityFilter(e) {
        if (e === "any") {
            delete filterArray.offer.guests;
        } else {
            filterArray.offer.guests = Number(e);
        }
    }
    function featureFilter(e){
        if (e.checked) {
            
            filterArray.offer.features.push(e.value);
        } else {
            // remove the feature from the features array
            const index = filterArray.offer.features.indexOf(e.value);
            if (index > -1) {
                filterArray.offer.features.splice(index, 1);
            }
        }
    }
    function priceFilter(e) {
        switch (e) {
            case 'low':
                filterArray.offer.price = {
                    min: 0,
                    max: 10000
                };
                break;
            case 'middle':
                filterArray.offer.price = {
                    min: 10000,
                    max: 50000
                };
                break;
            case 'high':
                filterArray.offer.price = {
                    min: 50000,
                    max: Number.MAX_SAFE_INTEGER
                };
                break;
            case "any":
                filterArray.offer.price = {
                    min: 0,
                    max: Number.MAX_SAFE_INTEGER
                };
        }
    }


    let filtered = [];

    function applyFilter(data) {
        filtered = data.filter(item => {
            // check if item matches the filter criteria
            if (filterArray.offer.type && item.offer.type !== filterArray.offer.type) {
                return false;
            }
            if (filterArray.offer.rooms && item.offer.rooms !== filterArray.offer.rooms) {
                return false;
            }
            if (filterArray.offer.guests && item.offer.guests !== filterArray.offer.guests) {
                return false;
            }
            if (filterArray.offer.price) {
                let itemPrice = item.offer.price;
                let filterPrice = filterArray.offer.price;
                if (typeof filterPrice === 'number') {
                    if (itemPrice > filterPrice) {
                        return false;
                    }
                } else if (itemPrice < filterPrice.min || itemPrice > filterPrice.max) {
                        return false;
                    }
                
            }
            if (filterArray.offer.features.length > 0) {
                let itemFeatures = item.offer.features;
                let filterFeatures = filterArray.offer.features;
                let matchesFilter = filterFeatures.every(filterFeature => itemFeatures.includes(filterFeature));
                if (!matchesFilter) {
                    return false;
                }
            }
            return true;
        });
        return filtered;
    }







    /*eventListeners */
    typeSelector.addEventListener('change', (e) => {
        typeFilter(e.target.value);
        filteredData = applyFilter(shuffledBackendData);
        console.log(filteredData)


    })
    roomSelector.addEventListener('change', (e) => {
        roomFilter(e.target.value);
        console.log(filterArray);
        filteredData = applyFilter(shuffledBackendData) // log filtered each time roomSelector is changed
        console.log(filteredData)
    })
    capacitySelector.addEventListener('change', (e) => {
        capacityFilter(e.target.value);
        console.log(filterArray);
        filteredData = applyFilter(shuffledBackendData) // log filtered each time capacitySelector is changed
        console.log(filteredData)
    })
    featureSelector.addEventListener('change', (e)=>{
        featureFilter(e.target);
        console.log(filterArray);
        console.log(e.target.value)
        filteredData = applyFilter(shuffledBackendData);
        console.log(filteredData)
    });
    priceSelector.addEventListener('change', (e) =>{
        priceFilter(e.target.value);
        console.log(e.target.value)
        console.log(filterArray);
        filteredData = applyFilter(shuffledBackendData);
        console.log(filteredData);
    })
}

