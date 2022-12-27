let FromNode = async ({ inFolderName, inFileName, inItemName, inRowPK, inProjectName }) => {
    console.log(" inRowPK : ", inRowPK);
    try {
        let LocalReturnObject = { KTF: false, KResult: "", JsonData: {} };

        let inFetchPostData = {
            FileNameOnly: inFileName,
            FolderName: inFolderName,
            ItemName: inItemName,
            JsonPk: inRowPK,
            Screenname: "Create"
        };

        //let jVarLocalFetchUrl = "/JSONApi/API/Data/FromFolder/FromFile/ScreensFromDisplayJson/Tabular/Row/Show/FromParams";

        let jVarLocalFetchUrl = `/${inProjectName}/API/Data/FromFolder/FromFile/Items/FromDataFolder/RowData`;


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

        if (data.KTF === false) {
            LocalReturnObject.KReason = data.KReason;
            return await LocalReturnObject;
        };

        LocalReturnObject.JsonData = data.JsonData;

        LocalReturnObject.KTF = true;
        return await LocalReturnObject;

    } catch (error) {
        console.log("error:", error);
    }

};

export { FromNode };