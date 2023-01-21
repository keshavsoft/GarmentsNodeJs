import { StartFunc as PushDataStartFunc } from "./PushData/FetchFuncs.js";

let StartFunc = ({ inFolderName, inFileName, inItemName, inProjectName }) => {
    let jVarLocalCreateNewButtonId = document.getElementById("CreateNewButtonId");

    jVarLocalCreateNewButtonId.addEventListener("click", async () => {
        let LocalFromSave = await PushDataStartFunc({
            inFolderName,
            inFileName,
            inItemName,
            inProjectName
        });

        await LocalAfterSaveFunc({ inFetchPostData: LocalFromSave });
    });
};

let LocalAfterSaveFunc = ({ inFetchPostData }) => {

    if (inFetchPostData.KTF) {
        //argon.showSwal('success-message');
        window.location = "../ShowAll/ShowAll.html?FromSave=true";
        //  window.location = "../ShowAll/ShowAll.html";
    } else {
        if ("KReason" in inFetchPostData) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: inFetchPostData.KReason,
                footer: '<a href="">Why do I have this issue?</a>'
            });
        };
    };

};

export { StartFunc };