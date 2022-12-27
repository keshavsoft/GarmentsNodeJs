//import { StartFunc as PushDataStartFunc } from "./PushData/FetchFuncs.js";
import { StartFunc as UpdateFuncsStartFunc } from "./ButtonFuncs/UpdateFuncs.js";
import { ReturnRowPK } from "./urlSearchParams.js";

let StartFunc = ({ inFolderName, inFileName, inItemName, inProjectName }) => {
    let jVarLocalUpdateId = document.getElementById("UpdateId");
    let jVarLocalRowPK = ReturnRowPK().RowPK;
    console.log("jVarLocalRowPK  : ", jVarLocalRowPK);
    jVarLocalUpdateId.addEventListener("click", (event) => {
        UpdateFuncsStartFunc({
            inFolderName, inFileName, inItemName, inProjectName,
            inEvent: event
        })
    });
};

export { StartFunc };