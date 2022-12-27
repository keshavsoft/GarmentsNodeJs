import { jFStartFunc as CheckUserFuncsjFStartFunc } from "../../../CommonFuncs/LoginFuncs/CheckUserFuncs.js";
import { StartFunc as ShowOnDomStartFunc } from "./Show/ToDom/ShowOnDom.js";

let jVarCommonKToken = "KToken";
let jVarLocalStorageKeyName = "kUserName";

let jVarCommonKeys = {
    inFolderName: "Masters",
    inFileName: "Items",
    inItemName: "ItemName"
};
let jVarCommonProjectName = "JSONApi";

let jFStartFunc = async () => {
    CheckUserFuncsjFStartFunc({
        inUserKey: jVarLocalStorageKeyName,
        inKTokenKey: jVarCommonKToken
    });

    await ShowOnDomStartFunc({ ...jVarCommonKeys, inProjectName: jVarCommonProjectName });
};

jFStartFunc().then();