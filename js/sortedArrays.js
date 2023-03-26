import { backendData } from "./main.js";
import * as func from "./util.js"
const numberOfShownOffers = 10;
const fakeData = [
    {
        "author": {
            "name": "John Smith",
            "avatar": "img/avatars/user01.png"
        },
        "offer": {
            "title": "Luxury Apartment in the Heart of the City",
            "address": {
                "locationX": 37.7749,
                "locationY": -122.4194
            },
            "price": 300,
            "priceRange": "high",
            "type": "flat",
            "rooms": "2 room",
            "guests": 4,
            "checkin": "3:00 PM",
            "checkout": "11:00 AM",
            "features": [
                "wifi",
                "kitchen",
                "washer"
            ],
            "description": "This beautiful apartment is located in the heart of the city and is perfect for a luxurious stay. It features 2 bedrooms, a fully equipped kitchen, and all the amenities you need to make your stay comfortable and enjoyable.",
            "photos": [
                "https://picsum.photos/id/1015/600/400",
                "https://picsum.photos/id/1016/600/400",
                "https://picsum.photos/id/1018/600/400"
            ],
            "location": {
                "x": 37.7749,
                "y": -122.4194
            }
        }
    },
    {
        "author": {
            "name": "Jane Doe",
            "avatar": "img/avatars/user02.png"
        },
        "offer": {
            "title": "Cozy Cottage in the Woods",
            "address": {
                "locationX": 45.5231,
                "locationY": -122.6765
            },
            "price": 150,
            "priceRange": "low",
            "type": "palace",
            "rooms": "1 room",
            "guests": 2,
            "checkin": "4:00 PM",
            "checkout": "12:00 PM",
            "features": [
                "fireplace",
                "patio"
            ],
            "description": "Escape to this cozy cottage in the woods for a relaxing getaway. This beautiful cottage features a fireplace, a patio with stunning views, and all the amenities you need to make your stay comfortable and enjoyable.",
            "photos": [
                "https://picsum.photos/id/1021/600/400",
                "https://picsum.photos/id/1022/600/400",
                "https://picsum.photos/id/1023/600/400"
            ],
            "location": {
                "x": 45.5231,
                "y": -122.6765
            }
        }
    },
]
let filterArray = {
    offer:{
    }
}
const typeSelector = document.querySelector("#housing-type");
const priceSelector = document.querySelector("#housing-price");
const roomSelector = document.querySelector("#housing-rooms");
const capacitySelector = document.querySelector("#housing-guests");
let slicedDefault
console.log(`sliced`, slicedDefault)
export function Arrays() {
    const backendArray = JSON.stringify(backendData);
    const shuffledBackendData = func.shuffle(JSON.parse(backendArray));
    console.log(shuffledBackendData)
    slicedDefault = shuffledBackendData.slice(0, numberOfShownOffers);
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
            filterArray.offer.rooms = e;
        }
    }
    function capacityFilter(e) {
        if (e === "any") {
            delete filterArray.offer.guests;
        } else {
            filterArray.offer.guests = e;
        }
    }

    let filtered = [];

    function applyFilter(data) {
        filtered = []; // empty filtered at the beginning of each call
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
            return true;
        });
        console.log(filtered); // log filtered each time applyFilter is called
        return filtered;
    }

    /*eventListeners */
    typeSelector.addEventListener('change', (e) => {
        typeFilter(e.target.value);
        console.log(filterArray);
        console.log(applyFilter(fakeData))


    })
    roomSelector.addEventListener('change', (e) => {
        roomFilter(e.target.value);
        console.log(filterArray);
        console.log(applyFilter(backendData)) // log filtered each time roomSelector is changed
    })
    capacitySelector.addEventListener('change', (e) => {
        capacityFilter(e.target.value);
        console.log(filterArray);
        console.log(applyFilter(backendData)) // log filtered each time capacitySelector is changed
        console.log(backendData[0]);
        console.log(fakeData[0]);
    })
}

