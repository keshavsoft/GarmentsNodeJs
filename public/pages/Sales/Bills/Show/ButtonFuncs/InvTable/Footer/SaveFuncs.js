//import { StartFunc as PushDataStartFunc } from "./PushData/FetchFuncs.js";
//import { StartFunc as UpdateFuncsStartFunc } from "../FetchFuncs/UpdateFuncs.js";
import { StartFunc as SaveStartFunc } from "../../../FetchFuncs/InvTable/Footer/SaveFuncs.js";

let StartFunc = async ({ inFolderName, inFileName, inItemName, inProjectName }) => {
    return await SaveStartFunc({
        inFolderName, inFileName, inItemName,
        inProjectName
    });
};
// InvTableFooterSaveButtonId
export { StartFunc };