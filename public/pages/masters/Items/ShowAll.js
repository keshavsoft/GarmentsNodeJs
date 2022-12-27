import { jFStartFunc as CheckUserFuncsjFStartFunc } from "../../../CommonFuncs/LoginFuncs/CheckUserFuncs.js";
import { StartFunc as ShowAllStartFunc } from "./ShowAll/ToDom/ShowInBody.js";

let jVarCommonKToken = "KToken";
let jVarLocalStorageKeyName = "kUserName";

let StartFunc = async () => {
    CheckUserFuncsjFStartFunc({
        inUserKey: jVarLocalStorageKeyName,
        inKTokenKey: jVarCommonKToken
    });

    await ShowAllStartFunc();
};

StartFunc().then();