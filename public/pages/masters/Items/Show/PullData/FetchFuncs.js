let FromNode = async ({ inFolderName, inFileName, inItemName, inRowPK }) => {
    console.log(" inRowPK : ", inRowPK);
    try {
        let LocalReturnObject = { KTF: false, KResult: "", JsonData: {} };

        let inFetchPostData = {
            FileNameWithExtension: `${inFileName}.json`,
            FolderName: inFolderName,
            ItemName: inItemName,
            JsonPk: inRowPK,
            Screenname: "Create"
        };

        let jVarLocalFetchUrl = "/JSONApi/API/Data/FromFolder/FromFile/ScreensFromDisplayJson/Tabular/Row/Show/FromParams";
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

        if (data.KTF === false) {
            LocalReturnObject.KReason = data.KReason;
            return await LocalReturnObject;
        };
        LocalReturnObject.JsonData = data.DataFromServer;

        LocalReturnObject.KTF = true;
        return await LocalReturnObject;

    } catch (error) {
        console.log("error:", error);
    }

};

export { FromNode };