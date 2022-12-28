import { jFStartFunc as CheckUserFuncsjFStartFunc } from "../../../../CommonFuncs/LoginFuncs/CheckUserFuncs.js";
import { StartFunc as ShowAllStartFunc } from "../ShowAll/ToDom/ShowInBody.js";
import { StartFunc as AddListenersStartFunc } from "../ShowAll/AddListeners.js";
import { StartFunc as FormLoadFuncsStartFunc } from "./FormLoadFuncs.js";

let jVarCommonKToken = "KToken";
let jVarLocalStorageKeyName = "kUserName";

let jVarCommonKeys = {
    inFolderName: "Masters",
    inFileName: "Items",
    inItemName: "ItemName"
};
let jVarCommonProjectName = "JSONApi";

let StartFunc = async () => {
    CheckUserFuncsjFStartFunc({
        inUserKey: jVarLocalStorageKeyName,
        inKTokenKey: jVarCommonKToken
    });
    
    FormLoadFuncsStartFunc();

    await ShowAllStartFunc({ ...jVarCommonKeys, inProjectName: jVarCommonProjectName });

    AddListenersStartFunc({ ...jVarCommonKeys, inProjectName: jVarCommonProjectName });

};

StartFunc().then();