import { jFStartFunc as CheckUserFuncsjFStartFunc } from "../../../../CommonFuncs/LoginFuncs/CheckUserFuncs.js";
import { StartFunc as ShowOnDomStartFunc } from "../Show/ToDom/ShowOnDom.js";
import { StartFunc as AddListenersStartFunc } from "../Show/AddListeners.js";
import { ConfigObject } from "../../../ApiConfig.js";
import { KeysObject } from "../ConfigKeys.js";
import { StartFunc as FormLoadStartFunc } from "../Show/ToDom/FormLoad.js";

let jVarCommonKToken = ConfigObject.TokenName;
let jVarLocalStorageKeyName = ConfigObject.LocalStorageKeyName;
let jVarCommonKeys = KeysObject.CommonKeys;
let jVarCommonProjectName = ConfigObject.ProjectName;

let jFStartFunc = async () => {
    CheckUserFuncsjFStartFunc({
        inUserKey: jVarLocalStorageKeyName,
        inKTokenKey: jVarCommonKToken
    });

    await FormLoadStartFunc({ inProjectName: jVarCommonProjectName });

    await ShowOnDomStartFunc({ ...jVarCommonKeys, inProjectName: jVarCommonProjectName });
};

jFStartFunc().then(() => {
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaanbbbbbbbbbbbbb");
    AddListenersStartFunc({ ...jVarCommonKeys, inProjectName: jVarCommonProjectName });
});