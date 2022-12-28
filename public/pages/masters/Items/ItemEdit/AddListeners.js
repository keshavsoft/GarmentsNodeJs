//import { StartFunc as PushDataStartFunc } from "./PushData/FetchFuncs.js";
import { StartFunc as UpdateFuncsStartFunc } from "./ButtonFuncs/UpdateFuncs.js";

let StartFunc = ({ inFolderName, inFileName, inItemName, inProjectName }) => {
    let jVarLocalUpdateId = document.getElementById("UpdateId");
    
    jVarLocalUpdateId.addEventListener("click", async (event) => {
        await UpdateFuncsStartFunc({
            inFolderName, inFileName, inItemName, inProjectName,
            inEvent: event
        })
    });
};

export { StartFunc };