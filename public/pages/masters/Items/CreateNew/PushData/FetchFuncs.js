let StartFunc = async ({ inFolderName, inFileName, inItemName }) => {
    try {
        let LocalReturnObject = { KTF: false, KResult: "", JsonData: {} };

        let inFetchPostData = {
            inJsonConfig: {
                inFolderName,
                inJsonFileName: `${inFileName}.json`
            }, inItemConfig: {
                inItemName
            }
        };

        inFetchPostData.inPostData = PreparePostData();

        //let jVarLocalFetchUrl = `/JSONApi/API/Data/FromFolder/FromFile/Items/FromDataFolder/NoConfig/${inFolderName}/${inFileName}.json/${inItemName}`;
        let jVarLocalFetchUrl = "/JSONApi/Api/Data/FromFolder/FromFile/Items/FromDataFolder/Insert";
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

let PreparePostData = () => {
    let jVarLocalItemNameId = document.getElementById("ItemNameId");

    return {
        ItemName: jVarLocalItemNameId.value
    };
};

export { StartFunc };