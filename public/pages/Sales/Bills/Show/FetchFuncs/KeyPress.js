let PreparePostData = () => {
    let jVarLocalItemNameId = document.getElementById("ItemsDataListId");
    let jVarLocalRateId = document.getElementById("RateId1");
    let jVarLocalQty = document.getElementById("QtyId1");
    let jVarLocalSno = document.getElementById("Snoid");
    let jVarLocalQrCode = document.getElementById("QrCode");

    let jVarLocalReturnData = {};
    jVarLocalReturnData.ItemName = jVarLocalItemNameId.value;

    if (!(jVarLocalRateId === null)) {
        jVarLocalReturnData.UnitRate = parseInt(jVarLocalRateId.value);
    };

    if (!(jVarLocalQty === null)) {
        jVarLocalReturnData.Qty = parseInt(jVarLocalQty.value);
    };

    if (!(jVarLocalSno === null)) {
        jVarLocalReturnData.sno = parseInt(jVarLocalSno.value);
    };

    if (!(jVarLocalQrCode === null)) {
        jVarLocalReturnData.Barcode = jVarLocalQrCode.value;
    };

    //jVarLocalReturnData.GST = jVarLocalGSTId.value;

    return jVarLocalReturnData;
};

let StartFunc = async ({ inFolderName, inFileName, inItemName, inProjectName, inJsonPK }) => {
    try {
        let LocalReturnObject = { KTF: false, KResult: "", JsonData: {} };
        let jVarLocalRowPK = inJsonPK;
        //  jVarLocalRowPK = 2;

        let inFetchPostData = {
            FileNameOnly: inFileName,
            FolderName: inFolderName,
            ItemName: inItemName,
            JsonPk: jVarLocalRowPK,
            ScreenName: "Create",
            SubTableKey: "InvGrid"
        };

        // inFetchPostData.DataToInsert = PreparePostData();
        let jVarLocalFetchUrl = `/${inProjectName}/Api/Data/FromFolder/FromFile/Items/FromDataFolder/RowData`;
        
        // {
        //     "FileNameOnly": "Generate",
        //     "FolderName": "QrCodes",
        //     "ItemName": "Barcodes",
        //     "JsonPk": "4",
        //     "Screenname": "Create"
        // }

        let jVarLocalFetchHeaders = {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inFetchPostData)
        };
        console.log("sssssss : ", jVarLocalFetchUrl);
        
        // const response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);
        // const data = await response.json();
        // LocalReturnObject.KTF = data.KTF;

        // LocalReturnObject.KTF = true;
        return await LocalReturnObject;

    } catch (error) {
        console.log("error:", error);
    }

};

export { StartFunc };