import { offers } from "./variables.js";
import {cloneOffer} from "./markgen.js"



const map = L.map('map-canvas').setView([35.68160140616105, 139.7518429874794,], 13);
let marker = undefined;
let myMarker =undefined;
let redIcon = L.icon({
    iconUrl: './img/main-pin.svg',

    iconSize: [38, 95], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});
export function mapPopup(){
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    for (let i = 0; i < offers.length; i++) {
        marker = new L.marker([offers[i].offer.location.x, offers[i].offer.location.y],)
            .bindPopup(cloneOffer[i])
            .addTo(map);
        
    }
    myMarker = new L.marker(L.latLng(35.66267785620779, 139.75866624868985), { draggable: true, icon: redIcon })
        .addTo(map)
        .on('dragend', function () {
        const coord = String(myMarker.getLatLng()).split(", ");
        console.log(coord);
        const lat = coord[0].split('(');
        console.log(lat);
        const lng = coord[1].split(')');
        console.log(lng);
        myMarker.bindPopup("Moved to: " + lat[1] + ", " + lng[0] + ".");
        document.getElementById("address").value = lat[1] + ", " + lng[0];
    })
}
