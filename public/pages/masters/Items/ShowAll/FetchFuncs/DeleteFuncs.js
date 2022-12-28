let StartFunc1 = async ({ inFolderName, inFileName, inItemName, inProjectName, inRowPK }) => {
    try {
        let LocalReturnObject = { KTF: false, KResult: "", JsonData: {} };

        let jVarLocalFetchUrl = `/${inProjectName}/API/Data/FromFolder/FromFile/Items/FromDataFolder/AsArrayWithPK`;

        let inFetchPostData = {
            FolderName,
            FileNameOnly: inFileName,
            ItemName,
            ScreenName: "Create"
        };

        let jVarLocalFetchHeaders = {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inFetchPostData)
        };
        console.log("jVarLocalFetchUrl : ", jVarLocalFetchUrl, jVarLocalFetchHeaders);
        // const response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);
        // const data = await response.json();

        // if (data.KTF === false) {
        //     LocalReturnObject.KReason = data.KReason;
        //     return await LocalReturnObject;
        // };

        // LocalReturnObject.JsonData = data.JsonData;

        LocalReturnObject.KTF = true;
        return await LocalReturnObject;

    } catch (error) {
        console.log("error:", error);
    }

};

let StartFunc = async ({ inFolderName, inFileName, inItemName, inRowPK, inProjectName }) => {
    try {
        let LocalReturnObject = { KTF: false, KResult: "", JsonData: {} };

        let inFetchPostData = {
            FileNameOnly: inFileName,
            FolderName: inFolderName,
            ItemName: inItemName,
            JsonPk: inRowPK,
            Screenname: "Create"
        };
        
        let jVarLocalFetchUrl = `/${inProjectName}/API/Data/FromFolder/FromFile/Items/FromDataFolder/RowData`;

        let jVarLocalFetchHeaders = {
            method: "DELETE",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inFetchPostData)
        };
        1
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

export { StartFunc };