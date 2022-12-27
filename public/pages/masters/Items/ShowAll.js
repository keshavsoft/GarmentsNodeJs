import { jFStartFunc as CheckUserFuncsjFStartFunc } from "../../../CommonFuncs/LoginFuncs/CheckUserFuncs.js";
import { StartFunc } from "./ShowAll/ToDom/ShowInBody.js";

let jVarCommonKToken = "KToken";
let jVarLocalStorageKeyName = "kUserName";

// http://localhost:4119/JSONApi/API/Data/FromFolder/FromFile/ScreensFromDisplayJson/Tabular/Row/Show/FromParams

let jFStartFunc = async () => {
    CheckUserFuncsjFStartFunc({
        inUserKey: jVarLocalStorageKeyName,
        inKTokenKey: jVarCommonKToken
    });

    // await FromNode({
    //     inFolderName: "Transactions",
    //     inFileName: "JOURNALS",
    //     inItemName: "JOURNAL"
    // });

    await StartFunc();
};

jFStartFunc({ inUserKey: jVarLocalStorageKeyName }).then();