const houseUploadField = document.querySelector(".ad-form__upload");
const houseImage = document.querySelector(".ad-form__photo");
const avatarImage = document.querySelector(".ad-form-header__preview img")
const avatarUploadField = document.querySelector(".ad-form__field");
export function imageForm(){
    avatarUploadField.addEventListener('change', function (e) {
        if (e.target.files[0]) {
            let avatarReader = new FileReader();
            avatarReader.onloadend = function () {
                avatarImage.src = avatarReader.result;
            }
            if (e.target.files[0]) {
                avatarReader.readAsDataURL(e.target.files[0]);
            } else {
                avatarImage.src = "";
            }
        }
    });
    houseUploadField.addEventListener('change', function (e) {
        if (e.target.files[0]){
            let reader = new FileReader();
            reader.onloadend = function () {
                const house = document.createElement('img');
                house.src = reader.result;
                house.setAttribute("width", "60");
                house.setAttribute("height", "60");
                houseImage.appendChild(house);
                console.log(house)
        }
        if (e.target.files[0]){
            reader.readAsDataURL(e.target.files[0]);
        }else{
            houseImage.src = "";
        }
    }
});

}
