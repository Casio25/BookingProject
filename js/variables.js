import * as variables from "./variables.js";
import { getOffer } from "./data.js";

export const numberOfClients = 10;
const exampleNumber = 1;
export const numberOfRooms = ["1 кімната", "2 кімнати", "3 кімнати", "100 кімнат"];
export const numberOfGuests = {
    MIN: 0,
    MAX: 3
}
export const priceList = {
    MIN: 1000,
    MAX: 30000
}
export const numberOfAvatars = {
    MIN: 1,
    MAX: 8
}
export const locationXValues = {
    MIN: 35.65000,
    MAX: 35.70000
}
export const locationYValues = {
    MIN: 139.70000,
    MAX: 139.80000
}
export const authorNames = ["Emily Rodriguez", "Thomas Nguyen", "Samantha Patel", "William Kim",
    "Elizabeth Davis", "Michael Johnson", "Rachel Lee", "Alexander Brown", "Olivia Garcia", "Benjamin Wright"]
export const checkinTimes = ["12:00", "13:00", "14:00"];
export const checkoutTimes = ["12:00", "13:00", "14:00"];
export const titleArray = ["Book Now and Save: Exclusive Limited - Time Offer!", "Don't Miss Out on Our Early Bird Specials - Book Today!",
    "Last-Minute Deals: Book Now and Save on Your Next Trip!", "Get More for Less: Book Your Stay and Enjoy Great Discounts!",
    "The Ultimate Escape: Book Now and Enjoy a Relaxing Getaway!", "Adventure Awaits: Book Now and Save on Your Next Excursion!",
    "Stay Longer and Save: Book Your Extended Stay and Enjoy Big Discounts!", "Book Early and Save Big on Your Next Vacation!",
    "Your Dream Vacation Awaits: Book Now and Enjoy Great Savings!", "Romantic Getaways: Book Now and Surprise Your Loved One!"];
export const typeArray = ["palace", "flat", "house", "bungalow"];
export const features = [
    "wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"
];
export const roomDescriptions = [
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
export const photosArray = [`http://o0.github.io/assets/images/tokyo/hotel1.jpg`, `http://o0.github.io/assets/images/tokyo/hotel2.jpg`, `http://o0.github.io/assets/images/tokyo/hotel3.jpg`];


export const offers = new Array(variables.numberOfClients).fill(null).map(() => {
    return getOffer();
});
export const exampleOffer = new Array(exampleNumber).fill(null).map(() => {
    return getOffer();
});