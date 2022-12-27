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

        //let jVarLocalFetchUrl = `/JSONApi/API/Data/FromFolder/FromFile/Items/FromDataFolder/NoConfig/${inFolderName}/${inFileName}.json/${inItemName}`;
        //        let jVarLocalFetchUrl = `/${inProjectName}/Api/Data/FromFolder/FromFile/Items/FromDataFolder/Insert`;
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
        console.log("data : ", data);

        if (data.KTF) {
            argon.showSwal('success-message');
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="">Why do I have this issue?</a>'
            })
        };
        // if (data.KTF === false) {
        //     LocalReturnObject.KReason = data.KReason;
        //     return await LocalReturnObject;
        // };
        // LocalReturnObject.JsonData = data.DataFromServer;

        LocalReturnObject.KTF = true;
        return await LocalReturnObject;

    } catch (error) {
        console.log("error:", error);
    }

};

export { StartFunc };