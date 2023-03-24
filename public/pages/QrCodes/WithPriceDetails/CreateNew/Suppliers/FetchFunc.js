let StartFunc = async ({ inProjectName }) => {
    let LocalReturnObject = { KTF: false, KResult: "", JsonData: {} };

    try {
        let inFetchPostData = {
            inFolderName: "Purchases",
            inFileNameOnly: "Suppliers",
            inItemName: "SuppliersName",
            ScreenName: "ForDataList"
        };

        //   let jVarLocalFetchUrl = `/${inProjectName}/Api/Data/FromFolder/FromFile/Items/FromDataFolder/WithScreens/WithChecking/CreateNew`;
        let jVarLocalFetchUrl = `/${inProjectName}/API/Data/FromFolder/FromFile/Items/FromDataFolder/AsArrayWithPK`;

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

export { StartFunc };