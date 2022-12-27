
let jFStartFunc = async ({ inKeyName }) => {
    let jVarSignInButtonId = document.getElementById("SignInButtonId");
    jVarSignInButtonId.addEventListener("click", () => {
        jFButtonClick({ inKeyName });
    });
};

let jFButtonClick = async ({ inKeyName }) => {
    let jVarLocalUserNameId = document.getElementById("UserNameId");
    let jVarLocalPasswordId = document.getElementById("PasswordId");

    let jVarLocalUserName = jVarLocalUserNameId.value;
    let jVarLocalPassword = jVarLocalPasswordId.value;

    //  let jVarLocalKToken = "KMaguvaaToken";
    //setCookie(jVarLocalKToken, "KeshavSoft", 1);
    let jVarLocalFromToken = await jFGetTokenFromFetch({
        inUserName: jVarLocalUserName,
        inPassWord: jVarLocalPassword
    });

    if (jVarLocalFromToken.KTF) {
        localStorage.setItem(inKeyName, jVarLocalUserName);
        window.location = "/index.html";
    };
};

let jFGetTokenFromFetch = async ({ inUserName, inPassWord }) => {
    let jVarLocalFetchUrl = "/JSONApi/Validate/Users/InUserDataJson/ForUserNameAndPassword/TokenToCookieFirmDetailsAlso";
    let jVArLocalBody = {
        inUserName,
        inPassWord
    };

    let jVArLocalHeader = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jVArLocalBody)
    };

    let jVarLocalResponse = await fetch(jVarLocalFetchUrl, jVArLocalHeader);
    let jVarLocalResult = await jVarLocalResponse.json();
    return await jVarLocalResult;
};

let setCookie = (name, value, days) => {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
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

export { jFStartFunc }