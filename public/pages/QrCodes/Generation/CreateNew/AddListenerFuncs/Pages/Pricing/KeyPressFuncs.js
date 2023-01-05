let StartFunc = () => {
    let jVarLocalPriceId = document.getElementById("Price1Id");
    let jVarLocalPecentagePrice = document.getElementById("PecentagePrice");
    let jVarLocalPrice2Id = document.getElementById("Price2Id");

    jVarLocalPecentagePrice.addEventListener("keypress", (event) => {
        if (event.keyCode === 13) {
            jVarLocalPrice2Id.value = jVarLocalPriceId.value * jVarLocalPecentagePrice.value / 100;

        }
    });


};

export { StartFunc }