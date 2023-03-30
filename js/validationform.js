import { sendOffer } from "./fetch.js";


const formElemTitle = document.querySelector("#title");
const formElemType = document.querySelector("#type");
const formElemPrice = document.querySelector("#price");
const formElemRooms = document.querySelector("#room_number");
const formElemCapacity = document.querySelector("#capacity");
const formElemCheckin = document.querySelector("#timein");
const formElemCheckout = document.querySelector("#timeout");

/*Submit button  */
const submitButton = document.querySelector(".ad-form__submit")
const notForPeople = 100;

const bungalowMin = 0;
const flatMin = 1000;
const houseMin = 5000;
const palaceMin = 10000;
formElemCapacity.value = "1"
export function validationForm() {
    /*functions for chechin and checkout*/
    function checkOutChange(e){
        formElemCheckout.value = e.target.value;
    }
    function checkInChange(e){
        formElemCheckin.value = e.target.value;
    }
    function defaultCapacityChange(){
        document.querySelector('select[name="capacity"] option[value="0"]').disabled = false;
        document.querySelector('select[name="capacity"] option[value="2"]').disabled = true;
        document.querySelector('select[name="capacity"] option[value="3"]').disabled = true;
        document.querySelector('select[name="capacity"] option[value="1"]').disabled = true;
        console.log('defaultcap')
    }
    function roomChange(e){
        if (e.target.value == notForPeople){
            defaultCapacityChange();
            formElemCapacity.value = "0"
        }else {
            defaultCapacityChange();
            for(let i = e.target.value; i >= 1; i--){
                document.querySelector(`select[name="capacity"] option[value="${i}"]`).disabled = false;
                console.log(i);
            }
        }
    }
    function capacityChange(e) {
        if (e.target.value == 0){
            formElemRooms.value = "100";
        }
    }

    formElemType.addEventListener('change', (e) => {
        switch (e.target.value) {
            
            case "bungalow":
                formElemPrice.min = bungalowMin;
                formElemPrice.placeholder = bungalowMin;
                break;
            case "flat":
                formElemPrice.min = flatMin;
                formElemPrice.placeholder = flatMin;
                break;
            case "house":
                formElemPrice.min = houseMin;
                formElemPrice.placeholder = houseMin;
                break;
            case "palace":
                formElemPrice.min = palaceMin;
                formElemPrice.placeholder = palaceMin;
                break;
        }
    })

    formElemRooms.addEventListener('change', (e) =>{
        roomChange(e);
    })
    formElemCapacity.addEventListener('change', (e) => {
        capacityChange(e);
    })
    formElemCheckin.addEventListener('change', (e) =>{
        checkOutChange(e)
    })
    formElemCheckout.addEventListener('change', (e) => {
        checkInChange(e)
    })


    function validationCheck(){
        if (formElemPrice.value === "" || formElemTitle === "") {
            console.log("not enought data");
        } else if (formElemCapacity.value == "0" && formElemRooms.value !== "100") {
            console.log("wrong type of flat for that ammout of people");
        }else if (formElemCapacity.value > formElemRooms.value){
            console.log("Wrong type of people for that type of flat");
        }else {
            console.log("ok");
            sendOffer();
            window.location.reload();
        }
    }


    submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        validationCheck();
    });

}
