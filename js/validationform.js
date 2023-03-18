import * as variables from "./variables.js";

const formElemType = document.querySelector("#type");
const formElemPrice = document.querySelector("#price");
const formElemRooms = document.querySelector("#room_number");
const formElemCapacity = document.querySelector("#capacity");
const formElemCheckin = document.querySelector("#timein");
const formElemCheckout = document.querySelector("#timeout");
formElemCapacity.value = "1"
export function validationForm() {
    formElemType.addEventListener('change', (e) => {
        switch (e.target.value) {
            
            case "bungalow":
                formElemPrice.min = 0;
                break;
            case "flat":
                
                formElemPrice.min = 1000;
                break;
            case "house":
                formElemPrice.min = 5000;
                break;
            case "palace":
                formElemPrice.min = 10000;
                break;
        }
    })
    formElemRooms.addEventListener('change', (e) =>{
        switch (e.target.value) {
            case "1":
                document.querySelector('select[name="capacity"] option[value="1"]').disabled = false;
                document.querySelector('select[name="capacity"] option[value="2"]').disabled = true;
                document.querySelector('select[name="capacity"] option[value="3"]').disabled = true;
                document.querySelector('select[name="capacity"] option[value="0"]').disabled = true;
                break;
            case "2":
                document.querySelector('select[name="capacity"] option[value="1"]').disabled = false;
                document.querySelector('select[name="capacity"] option[value="2"]').disabled = false;
                document.querySelector('select[name="capacity"] option[value="3"]').disabled = true;
                document.querySelector('select[name="capacity"] option[value="0"]').disabled = true;
                break;
            case "3":
                document.querySelector('select[name="capacity"] option[value="1"]').disabled = false;
                document.querySelector('select[name="capacity"] option[value="2"]').disabled = false;
                document.querySelector('select[name="capacity"] option[value="3"]').disabled = false;
                document.querySelector('select[name="capacity"] option[value="0"]').disabled = true;
                break;
            case "100":
                document.querySelector('select[name="capacity"] option[value="0"]').disabled = false;
                document.querySelector('select[name="capacity"] option[value="2"]').disabled = true;
                document.querySelector('select[name="capacity"] option[value="3"]').disabled = true;
                document.querySelector('select[name="capacity"] option[value="1"]').disabled = true;
                formElemCapacity.value = "0"
                break;
        }
    })
    formElemCapacity.addEventListener('change', (e) => {
        switch(e.target.value){
            case "1":
                document.querySelector('select[name="rooms"] option[value="100"]').disabled = false;
                document.querySelector('select[name="rooms"] option[value="2"]').disabled = false;
                document.querySelector('select[name="rooms"] option[value="3"]').disabled = false;
                document.querySelector('select[name="rooms"] option[value="1"]').disabled = false;
                break;
            case "2":
                document.querySelector('select[name="rooms"] option[value="100"]').disabled = false;
                document.querySelector('select[name="rooms"] option[value="2"]').disabled = false;
                document.querySelector('select[name="rooms"] option[value="3"]').disabled = false;
                document.querySelector('select[name="rooms"] option[value="1"]').disabled = true;
                break;
            case "3":
                document.querySelector('select[name="rooms"] option[value="100"]').disabled = false;
                document.querySelector('select[name="rooms"] option[value="2"]').disabled = true;
                document.querySelector('select[name="rooms"] option[value="3"]').disabled = false;
                document.querySelector('select[name="rooms"] option[value="1"]').disabled = true;
                break;
            case "0":
                document.querySelector('select[name="rooms"] option[value="100"]').disabled = false;
                document.querySelector('select[name="rooms"] option[value="2"]').disabled = true;
                document.querySelector('select[name="rooms"] option[value="3"]').disabled = true;
                document.querySelector('select[name="rooms"] option[value="1"]').disabled = true;
                formElemRooms.value = "0"
                break;
        }
    })
    formElemCheckin.addEventListener('change', (e) =>{
        switch(e.target.value){
            case "12:00":
                formElemCheckout.value = "12:00"
                break;
            case "13:00":
                formElemCheckout.value = "13:00"
                break;
            case "14:00":
                formElemCheckout.value = "14:00"
                break;
        }
    })
    formElemCheckout.addEventListener('change', (e) => {
        switch (e.target.value) {
            case "12:00":
                formElemCheckin.value = "12:00"
                break;
            case "13:00":
                formElemCheckin.value = "13:00"
                break;
            case "14:00":
                formElemCheckin.value = "14:00"
                break;
        }
    })
    


}