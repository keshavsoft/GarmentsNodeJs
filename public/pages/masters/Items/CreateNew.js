import { jFStartFunc as CheckUserFuncsjFStartFunc } from "../../../CommonFuncs/LoginFuncs/CheckUserFuncs.js";
import { StartFunc as PushDataStartFunc } from "./CreateNew/PushData/FetchFuncs.js";
import { jFStartFunc as CreateNewjFStartFunc } from "./CreateNew/AddListeners.js";

let jVarCommonKToken = "KToken";
let jVarLocalStorageKeyName = "kUserName";

let jFStartFunc = async ({ inUserKey }) => {
    CheckUserFuncsjFStartFunc({
        inUserKey: jVarLocalStorageKeyName,
        inKTokenKey: jVarCommonKToken
    });

    CreateNewjFStartFunc({ inUserKey });
    // await PushDataStartFunc({
    //     inFolderName: "Masters",
    //     inFileName: "Items",
    //     inItemName: "ItemDetails"
    // })
};

jFStartFunc({ inUserKey: jVarLocalStorageKeyName }).then();