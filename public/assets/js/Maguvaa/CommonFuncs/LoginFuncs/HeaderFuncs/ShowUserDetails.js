
let OnHeaderFunc = ({ inUserKey }) => {
    let jVarLocalUsername = localStorage.getItem(inUserKey);

    let jVarLocalSignInNavId = document.getElementById("SignInNavId");
    let jVarLocalUserNameId = document.getElementById("UserNameId");

    if (jVarLocalSignInNavId !== null) {
        jVarLocalSignInNavId.classList.add("d-none");
    };

    if (jVarLocalUserNameId !== null) {
        jVarLocalUserNameId.innerHTML = jVarLocalUsername;
    };
};

export { OnHeaderFunc };