import { StartFunc as PushDataStartFunc } from "../";
import { StartFunc as StartFuncKeyPressFuncs } from "./AddListenerFuncs/Pages/Pricing/KeyPressFuncs.js";
let StartFunc = ({ inFolderName, inFileName, inItemName, inProjectName }) => {
    let jVarLocalCreateNewButtonId = document.getElementById("CreateNewButtonId");
    StartFuncKeyPressFuncs();

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





export { StartFunc };