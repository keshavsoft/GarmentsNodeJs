import { jFStartFunc as CheckUserFuncsjFStartFunc } from "../../../CommonFuncs/LoginFuncs/CheckUserFuncs.js";
import { jFStartFunc as CreateNewjFStartFunc } from "./CreateNew/AddListeners.js";

let jVarCommonKToken = "KToken";
let jVarLocalStorageKeyName = "kUserName";

let StartFunc = async ({ inUserKey }) => {
    CheckUserFuncsjFStartFunc({
        inUserKey: jVarLocalStorageKeyName,
        inKTokenKey: jVarCommonKToken
    });

    CreateNewjFStartFunc({ inUserKey });
};

StartFunc({ inUserKey: jVarLocalStorageKeyName }).then();