//import { StartFunc as PushDataStartFunc } from "./PushData/FetchFuncs.js";
//import { StartFunc as UpdateFuncsStartFunc } from "./ButtonFuncs/UpdateFuncs.js";
import { StartFunc as SaveFuncsStartFunc } from "./ButtonFuncs/InvTable/Footer/SaveFuncs.js";

let StartFunc = ({ inFolderName, inFileName, inItemName, inProjectName }) => {
    // let jVarLocalUpdateId = document.getElementById("UpdateId");
    

    // if (jVarLocalUpdateId !== null) {
    //     jVarLocalUpdateId.addEventListener("click", (event) => {
    //         UpdateFuncsStartFunc({
    //             inFolderName, inFileName, inItemName, inProjectName,
    //             inEvent: event
    //         })
    //     });
    // };

    let jVarLocalInvTableFooterSaveButtonId = document.getElementById("InvTableFooterSaveButtonId");
    
    if (jVarLocalInvTableFooterSaveButtonId !== null) {
        jVarLocalInvTableFooterSaveButtonId.addEventListener("click", (event) => {
            SaveFuncsStartFunc({
                inFolderName, inFileName, inItemName, inProjectName,
                inEvent: event
            })
        });
    };
};

export { StartFunc };