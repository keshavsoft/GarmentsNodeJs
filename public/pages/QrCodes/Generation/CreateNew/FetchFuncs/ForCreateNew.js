let StartFunc = async ({ inFolderName, inFileName, inItemName, inProjectName }) => {
    let LocalReturnObject = { KTF: false, KResult: "", JsonData: {} };

    try {
        let inFetchPostData = {
            FolderName: inFolderName,
            FileNameOnly: inFileName,
            ItemName: inItemName,
            ScreenName: "Create"
        };

        let jVarLocalFetchUrl = `/${inProjectName}/Api/Data/FromFolder/FromFile/Items/FromDataFolder/WithScreens/WithChecking/CreateNew`;

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

        if (data.KTF) {
            LocalReturnObject.JsonData = data.JsonData;
        };

        LocalReturnObject.KTF = true;
    } catch (error) {
        console.log("error:", error);
    };
    
    return await LocalReturnObject; 
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