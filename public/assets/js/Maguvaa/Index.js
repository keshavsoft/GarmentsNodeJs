import { jFStartFunc as CheckUserFuncsjFStartFunc } from "./CommonFuncs/LoginFuncs/CheckUserFuncs.js";

let jVarCommonKToken = "KToken";

let jVarLocalStorageKeyName = "kUserName";

let jFStartFunc = ({ inUserKey }) => {
   // console.log("ssssssssssss");
    CheckUserFuncsjFStartFunc({
        inUserKey,
        inKTokenKey: jVarCommonKToken
    });
};

jFStartFunc({ inUserKey: jVarLocalStorageKeyName });