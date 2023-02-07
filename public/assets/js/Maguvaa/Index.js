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

let jFStartFunc2 = ({ inUserKey }) => {
    let jVarLocalKToken = jVarCommonKToken;
    let jVarLocalTokenValue = getCookie(jVarLocalKToken);

    if (jVarLocalTokenValue === null) {
        window.location = "/pages/authentication/signin/illustration.html";
    } else {
        OnHeaderFunc({ inUserKey });
    };
};

let jFStartFunc1 = () => {
    let jVarLocalKToken = jVarCommonKToken;
    let jVarLocalTokenValue = getCookie(jVarLocalKToken);
    let jVarLocalUsername = localStorage.getItem(jVarLocalStorageKeyName);

    if (jVarLocalTokenValue === null) {
        window.location = "/pages/authentication/signin/illustration.html";
    } else {
        let jVarLocalSignInNavId = document.getElementById("SignInNavId");
        let jVarLocalUserNameId = document.getElementById("UserNameId");

        if (jVarLocalSignInNavId !== null) {
            jVarLocalSignInNavId.classList.add("d-none");
        };
        jVarLocalUserNameId.innerHTML = jVarLocalUsername;
    };
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

jFStartFunc({ inUserKey: jVarLocalStorageKeyName });