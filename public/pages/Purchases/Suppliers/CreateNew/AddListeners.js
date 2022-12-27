import { StartFunc as PushDataStartFunc } from "./PushData/FetchFuncs.js";

let jFStartFunc = () => {
    let jVarLocalCreateNewButtonId = document.getElementById("CreateNewButtonId");
    jVarLocalCreateNewButtonId.addEventListener("click", () => {
        PushDataStartFunc({
            inFolderName: "Purchases",
            inFileName: "Suppliers",
            inItemName: "SuppliersName"
        });
    });
};

export { jFStartFunc };