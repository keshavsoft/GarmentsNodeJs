import { StartFunc as StartFuncFetchFuncs } from "../../../FetchToServer/FetchFuncs.js";

let StartFunc = () => {
    let jVarLocalCloneClassName = document.getElementsByClassName("UploadButtonClass");

    for (let i = 0; i < jVarLocalCloneClassName.length; i++) {
        jVarLocalCloneClassName[i].addEventListener("click", StartFuncFetchFuncs)
    };
};

export { StartFunc };