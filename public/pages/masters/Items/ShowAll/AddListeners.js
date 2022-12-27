//import { StartFunc as PushDataStartFunc } from "./PushData/FetchFuncs.js";
import { StartFunc as DeleteFuncsStartFunc } from "./ButtonFuncs/DeleteFuncs.js";

let StartFunc = ({ inFolderName, inFileName, inItemName, inProjectName }) => {
    let jVarLocalDeleteButtons = document.getElementsByClassName("DeleteButtonClass");

    for (var i = 0; i < jVarLocalDeleteButtons.length; i++) {
        jVarLocalDeleteButtons[i].addEventListener("click", (event) => {
            DeleteFuncsStartFunc({
                inFolderName, inFileName, inItemName, inProjectName,
                inEvent: event
            })
        });
    };

};

export { StartFunc };