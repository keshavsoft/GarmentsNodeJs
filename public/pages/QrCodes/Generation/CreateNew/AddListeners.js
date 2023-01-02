import { StartFunc as PushDataStartFunc } from "./PushData/FetchFuncs.js";

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

    }


};

export { StartFunc };