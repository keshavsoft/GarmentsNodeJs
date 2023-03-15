import { ReturnRowPK } from "../../../urlSearchParams.js";

let PreparePostData = () => {
    let jVarLocalItemNameId = document.getElementById("ItemsDataListId");
    let jVarLocalRateId = document.getElementById("RateId");
    let jVarLocalQty = document.getElementById("QtyId");
    console.log("jVarLocalQty : ", jVarLocalQty);
    let jVarLocalReturnData = {};
    jVarLocalReturnData.ItemName = jVarLocalItemNameId.value;

    if (!(jVarLocalRateId === null)) {
        jVarLocalReturnData.UnitRate = parseInt(jVarLocalRateId.value);
    };

    if (!(jVarLocalQty === null)) {
        jVarLocalReturnData.Qty = parseInt(jVarLocalQty.value);
    };

    //jVarLocalReturnData.GST = jVarLocalGSTId.value;

    return jVarLocalReturnData;
};

let StartFunc = async ({ inFolderName, inFileName, inItemName, inProjectName }) => {
    try {
        let LocalReturnObject = { KTF: false, KResult: "", JsonData: {} };
        let jVarLocalRowPK = ReturnRowPK().RowPK;
        //  jVarLocalRowPK = 2;

        let inFetchPostData = {
            FileNameOnly: inFileName,
            FolderName: inFolderName,
            ItemName: inItemName,
            JsonPk: jVarLocalRowPK,
            ScreenName: "Create",
            SubTableKey: "InvGrid"
        };

        inFetchPostData.DataToInsert = PreparePostData();
        console.log("inFetchPostData------------ : ", inFetchPostData, jVarLocalRowPK);
        let jVarLocalFetchUrl = `/${inProjectName}/Api/Data/FromFolder/FromFile/Items/FromDataFolder/WithScreens/SubTable/WithChecking/Insert`;

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
        LocalReturnObject.KTF = data.KTF;

        LocalReturnObject.KTF = true;
        return await LocalReturnObject;

    } catch (error) {
        console.log("error:", error);
    }

};

export { StartFunc };