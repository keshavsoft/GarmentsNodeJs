let StartFunc = () => {
    let jVarLocalPriceId = document.getElementById("Price1Id");
    let jVarLocalPecentagePrice = document.getElementById("PecentagePrice");
    let jVarLocalPrice2Id = document.getElementById("Price2Id");


    jVarLocalPecentagePrice.addEventListener("keypress", (event) => {

        if (event.keyCode === 13) {

            let localCal = jVarLocalPecentagePrice.value / 100 * jVarLocalPriceId.value;
            jVarLocalPrice2Id.value = parseInt(jVarLocalPriceId.value) + parseInt(localCal);

        }
    });


};

export { StartFunc }