import { jFStartFunc as CheckUserFuncsjFStartFunc } from "../../../CommonFuncs/LoginFuncs/CheckUserFuncs.js";
import { StartFunc as AddListenersStartFunc } from "./CreateNew/AddListeners.js";

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

    AddListenersStartFunc({ ...jVarCommonKeys, inProjectName: jVarCommonProjectName });
};

StartFunc().then();