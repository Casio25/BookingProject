function filterByType(value) {
    if (value === "any") {
        console.log("no sorting by type");
    } else if (filteredArray.length == 0) {
        for (let i = 0; i < shuffledBackendData.length; i++) {
            if (shuffledBackendData[i].offer.type === `${value}`) {
                filteredArray.push(shuffledBackendData[i]);
                multiblefilteredArray.push(shuffledBackendData[i])
            }
        }
    } else if (filteredArray.length !== 0 && multiblefilteredArray) {
        filteredArray = [];

    }
}

/*another test */
function typeFilter(value) {
    filteredByType = [];
    if (value === "any") {
        for (let i = 0; i < shuffledBackendData.length; i++) {
            filteredByType.push(shuffledBackendData[i]);
        }
    } else {
        for (let i = 0; i < shuffledBackendData.length; i++) {
            if (shuffledBackendData[i].offer.type === `${value}`) {
                filteredArray.push(shuffledBackendData[i]);
                filteredByType.push(shuffledBackendData[i]);
            }
        }
    }
}
typeSelector.addEventListener('change', (e) => {
    filterByType(e.target.value);
    console.log(filteredArray)
    console.log(filteredArrayCopy)
})


/*test*/
/*eventListeners */
typeSelector.addEventListener('change', (e) => {
    typeFilter(e.target.value);
    console.log(filterArray)
    for (let i = 0; i < shuffledBackendData.length; i++) {
        let result = shuffledBackendData.filter((item) => {
            let flag = true;
            Object.keys(filterArray.offer).forEach((key) => {
                if (item[key] !== filterArray.offer[key]) {
                    flag = false;
                    return;
                }
            });
            return flag;
        });
        console.log(result)
    }
})