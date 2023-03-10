const numberOfClients = 10;
const numberOfRooms = {
    MIN: 1,
    MAX: 10
}
const numberOfGuests = {
    MIN: 1,
    MAX: 50
}
const priceList = {
    MIN: 300,
    MAX: 1200
}
const numberOfAvatars = {
    MIN: 1,
    MAX: 8
}
const locationXValues = {
    MIN: 35.65000,
    MAX: 35.70000
}
const locationYValues = {
    MIN: 139.70000,
    MAX: 139.80000
}
const authorNames = ["Emily Rodriguez", "Thomas Nguyen", "Samantha Patel", "William Kim",
"Elizabeth Davis", "Michael Johnson", "Rachel Lee", "Alexander Brown", "Olivia Garcia", "Benjamin Wright"]
const checkinTimes = ["12:00", "13:00", "14:00"];
const checkoutTimes = ["12:00", "13:00", "14:00"];
const titleArray = ["Book Now and Save: Exclusive Limited - Time Offer!", "Don't Miss Out on Our Early Bird Specials - Book Today!",
    "Last-Minute Deals: Book Now and Save on Your Next Trip!", "Get More for Less: Book Your Stay and Enjoy Great Discounts!",
    "The Ultimate Escape: Book Now and Enjoy a Relaxing Getaway!", "Adventure Awaits: Book Now and Save on Your Next Excursion!",
    "Stay Longer and Save: Book Your Extended Stay and Enjoy Big Discounts!", "Book Early and Save Big on Your Next Vacation!",
    "Your Dream Vacation Awaits: Book Now and Enjoy Great Savings!", "Romantic Getaways: Book Now and Surprise Your Loved One!"];
const typeArray = ["palace", "flat", "house", "bungalow"];
const features = [
    "Free Wi-Fi",
    "Elevator",
    "Air conditioning",
    "Swimming pool",
    "Gym",
    "Parking",
    "Restaurant",
    "Room service",
    "Business center",
    "Pet-friendly accommodations",
    "Accessible accommodations",
    "Non-smoking rooms",
    "Complimentary breakfast",
    "24-hour front desk",
    "Airport shuttle service",
    "Laundry facilities",
    "Spa services",
    "Childcare services",
    "Conference facilities",
    "Beachfront location"
];
const roomDescriptions = [
    "Cozy room with a comfortable queen-size bed and beautiful garden views.",
    "Spacious suite with a separate living area, kitchenette, and stunning ocean views.",
    "Modern room with a flat-screen TV, mini fridge, and access to a private balcony.",
    "Charming room with a traditional decor, featuring a king-size bed and antique furnishings.",
    "Luxurious penthouse suite with a private terrace, hot tub, and panoramic city views.",
    "Bright and airy room with large windows, a writing desk, and a plush queen-size bed.",
    "Rustic cabin with a fireplace, fully equipped kitchen, and a scenic forest location.",
    "Stylish room with contemporary decor, a rain shower, and a king-size bed with premium linens.",
    "Quaint room with a four-poster queen-size bed, hardwood floors, and a private bathroom.",
    "Family-friendly suite with bunk beds, a separate dining area, and easy access to nearby attractions."
];
const photosArray = [`http://o0.github.io/assets/images/tokyo/hotel1.jpg`, `http://o0.github.io/assets/images/tokyo/hotel2.jpg`, `http://o0.github.io/assets/images/tokyo/hotel3.jpg`];
const locationData = {};

function shuffle(a) {
    let j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

function RandomNaturalNumber(min, max){
    return Math.floor(Math.random()* (max - min) + min);
}

function RandomFloatNumber(min, max){
    return Math.random()*(max-min)+min;
    
}


const offers = new Array(numberOfClients).fill(null).map(() => {
    return getOffer();
});

function getOffer() {
    const shuffledFeatures = shuffle(features);
    const getRandomX = RandomFloatNumber(locationXValues.MIN, locationXValues.MAX);
    const getRandomY = RandomFloatNumber(locationYValues.MIN, locationYValues.MAX);
    return{
        author:{
            avatar: `img/avatars/user0${RandomNaturalNumber(numberOfAvatars.MIN, numberOfAvatars.MAX)}.png`
        },
        offer: {
            title: titleArray[RandomNaturalNumber(0, titleArray.length - 1)],
            address: {
                getRandomX,
                getRandomY
            },
            price: RandomNaturalNumber(priceList.MIN, priceList.MAX),
            type: typeArray[RandomNaturalNumber(0, typeArray.length - 1)],
            rooms: RandomNaturalNumber(numberOfRooms.MIN, numberOfRooms.MAX),
            guests: RandomNaturalNumber(numberOfGuests.MIN, numberOfGuests.MAX),
            checkin: checkinTimes[RandomNaturalNumber(0, checkinTimes.length - 1)],
            checkout: checkoutTimes[RandomNaturalNumber(0, checkoutTimes.length-1)],
            features:  shuffledFeatures.slice(0, RandomNaturalNumber(1, features.length -1)),
            description: roomDescriptions[RandomNaturalNumber(0, roomDescriptions.length -1)],
            photos: photosArray.slice(0, RandomNaturalNumber(1,photosArray.length-1)),
            location:{
                x: getRandomX,
                y: getRandomY,
            },
        }
    }
}
console.log(offers);