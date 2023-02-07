import { OnHeaderFunc } from "./HeaderFuncs/ShowUserDetails.js";

let jFStartFunc = ({ inUserKey, inKTokenKey }) => {
    let jVarLocalKToken = inKTokenKey;
    let jVarLocalTokenValue = getCookie(jVarLocalKToken);
 //   console.log("jVarLocalTokenValue: ", jVarLocalTokenValue);
    if (jVarLocalTokenValue === null) {
        window.location = "/pages/authentication/signin/illustration.html";
    } else {
        OnHeaderFunc({ inUserKey });
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

export { jFStartFunc };