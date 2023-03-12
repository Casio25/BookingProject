import * as variables from "./variables.js";
import * as func from "./util.js" 
import { getOffer } from "./data.js";




const offers = new Array(variables.numberOfClients).fill(null).map(() => {
    return getOffer();
});


console.log(offers);