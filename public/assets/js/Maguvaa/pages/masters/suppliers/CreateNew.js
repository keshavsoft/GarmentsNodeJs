import { jFStartFunc as CheckUserFuncsjFStartFunc } from "../../../CommonFuncs/LoginFuncs/CheckUserFuncs.js";
import { StartFunc as PushDataStartFunc } from "./CreateNew/PushData/FetchFuncs.js";

let jVarCommonKToken = "KToken";
let jVarLocalStorageKeyName = "kUserName";

let jFStartFunc = async ({ inUserKey }) => {
    CheckUserFuncsjFStartFunc({
        inUserKey: jVarLocalStorageKeyName,
        inKTokenKey: jVarCommonKToken
    });

    await PushDataStartFunc({
        inFolderName: "Masters",
        inFileName: "Items",
        inItemName: "ItemDetails"
    })
};

let getCookie = (name) => {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
};

jFStartFunc({ inUserKey: jVarLocalStorageKeyName }).then();