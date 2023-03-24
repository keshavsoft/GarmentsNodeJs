import { ButtonClickFunc as ButtonClickFuncUploadDataFuncs } from './ButtonClickFuncs/UploadDataFuncs.js';

let StartFunc = () => {
    let jVarLocalUploadId = document.getElementById("UploadData");

    jVarLocalUploadId.addEventListener("click", ButtonClickFuncUploadDataFuncs)
};

export { StartFunc };