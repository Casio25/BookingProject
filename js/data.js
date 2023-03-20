import * as variables from "./variables.js";
import * as func from "./util.js"


export function getOffer() {
    const shuffledFeatures = func.shuffle(variables.features);
    const getRandomX = func.RandomFloatNumber(variables.locationXValues.MIN, variables.locationXValues.MAX);
    const getRandomY = func.RandomFloatNumber(variables.locationYValues.MIN, variables.locationYValues.MAX);
    return {
        author: {
            avatar: `img/avatars/user0${func.RandomNaturalNumber(variables.numberOfAvatars.MIN, variables.numberOfAvatars.MAX)}.png`
        },
        offer: {
            title: variables.titleArray[func.RandomNaturalNumber(0, variables.titleArray.length - 1)],
            adress: {
                locationX: getRandomX,
                locationY: getRandomY
            },
            price: func.RandomNaturalNumber(variables.priceList.MIN, variables.priceList.MAX),
            type: variables.typeArray[func.RandomNaturalNumber(0, variables.typeArray.length)],
            rooms: variables.numberOfRooms[func.RandomNaturalNumber(0, variables.numberOfRooms.length)],
            guests: func.RandomNaturalNumber(variables.numberOfGuests.MIN, variables.numberOfGuests.MAX),
            checkin: variables.checkinTimes[func.RandomNaturalNumber(0, variables.checkinTimes.length)],
            checkout: variables.checkoutTimes[func.RandomNaturalNumber(0, variables.checkoutTimes.length)],
            features: shuffledFeatures.slice(0, func.RandomNaturalNumber(1, variables.features.length)),
            description: variables.roomDescriptions[func.RandomNaturalNumber(0, variables.roomDescriptions.length)],
            photos: variables.photosArray.slice(0, func.RandomNaturalNumber(1, variables.photosArray.length)),
            location: {
                x: getRandomX,
                y: getRandomY,
            },
        }
    }
}