import { jFStartFunc as CheckUserFuncsjFStartFunc } from "../../../CommonFuncs/LoginFuncs/CheckUserFuncs.js";
import { StartFunc as ShowAllStartFunc } from "./ShowAll/ToDom/ShowInBody.js";

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

    await ShowAllStartFunc({ ...jVarCommonKeys, inProjectName: jVarCommonProjectName });
};

StartFunc().then();