import { StartFunc as PushDataStartFunc } from "./PushData/FetchFuncs.js";

let StartFunc = ({ inFolderName, inFileName, inItemName, inProjectName }) => {
    let jVarLocalCreateNewButtonId = document.getElementById("CreateNewButtonId");
    LocalAmountCalculate();

    if (jVarLocalCreateNewButtonId !== null) {
        jVarLocalCreateNewButtonId.addEventListener("click", () => {
            PushDataStartFunc({
                inFolderName,
                inFileName,
                inItemName,
                inProjectName
            });
        });

    }


};

let LocalAmountCalculate = () => {
    let jVarLocalPriceId = document.getElementById("Price1Id");
    let jVarLocalPecentagePrice = document.getElementById("PecentagePrice");
    let jVarLocalPrice2Id = document.getElementById("Price2Id");

    jVarLocalPrice2Id.addEventListener("keypress", (event) => {
        if (event.keyCode === 13) {
            console.log("ssssssssss");
            jVarLocalPrice2Id.value = jVarLocalPriceId.value * jVarLocalPecentagePrice.value;

        }
    });

}



export { StartFunc };