import { StartFunc as PreparePostDataStartFunc } from "../PreparePostData.js";

let StartFunc = async ({ inFolderName, inFileName, inItemName, inProjectName }) => {
    try {
        let LocalReturnObject = { KTF: false, KResult: "", JsonData: {} };

        let inFetchPostData = {
            inFolderName,
            inFileNameOnly: inFileName,
            inItemName,
            inScreenName: "Create"
        };

        inFetchPostData.inPostData = PreparePostDataStartFunc();

        let jVarLocalFetchUrl = `/${inProjectName}/Api/Data/FromFolder/FromFile/Items/FromDataFolder/WithScreens/Insert`;

        let jVarLocalFetchHeaders = {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inFetchPostData)
        };

        const response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);
        const data = await response.json();

        LocalAfterSaveFunc({ inFetchPostData: data });

        LocalReturnObject.KTF = true;
        return await LocalReturnObject;

    } catch (error) {
        console.log("error:", error);
    }

};

let LocalAfterSaveFunc = ({ inFetchPostData }) => {
    if (inFetchPostData.KTF) {
        //argon.showSwal('success-message');
        window.location = "../ShowAll/ShowAll.html?FromSave=true";
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