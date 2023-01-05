import { StartFunc as PushDataStartFunc } from "./PushData/FetchFuncs.js";
import { StartFunc as StartFuncKeyPressFuncs } from "./Pages/Pricing/KeyPressFuncs.js";

let StartFunc = ({ inFolderName, inFileName, inItemName, inProjectName }) => {
    let jVarLocalCreateNewButtonId = document.getElementById("CreateNewButtonId");
  
    if (jVarLocalCreateNewButtonId !== null) {
        jVarLocalCreateNewButtonId.addEventListener("click", () => {
            PushDataStartFunc({
                inFolderName,
                inFileName,
                inItemName,
                inProjectName
            });
        });

    };

    StartFuncKeyPressFuncs();
};


export { StartFunc };