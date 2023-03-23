//import { StartFunc as PushDataStartFunc } from "./PushData/FetchFuncs.js";
import { StartFunc as UpdateFuncsStartFunc } from "../FetchFuncs/UpdateFuncs.js";

let StartFunc = ({ inFolderName, inFileName, inItemName, inProjectName }) => {
    UpdateFuncsStartFunc({
        inFolderName, inFileName, inItemName,
        inProjectName
    });
};

export { StartFunc };