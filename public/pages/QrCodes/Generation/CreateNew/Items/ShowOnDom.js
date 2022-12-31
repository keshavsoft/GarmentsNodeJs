import { StartFunc as FetchFunc } from "./FetchFunc.js";

let StartFunc = async ({ inProjectName }) => {
    let jVarLocalFromFetch = await FetchFunc({ inProjectName });
    console.log("jVarLocalFromFetch ", jVarLocalFromFetch);

    if (jVarLocalFromFetch.KTF) {
        let jVarLocalItemsDataListId = document.getElementById("ItemsDataListId");


        var options = '';

        for (var i = 0; i < jVarLocalFromFetch.JsonData.length; i++) {
          options += '<option value="' + jVarLocalFromFetch.JsonData[i].ItemName + '" />';
        }
        
        jVarLocalItemsDataListId.innerHTML = options;

    };

    let LocalReturnObject = { KTF: false, KResult: "", JsonData: {} };


    return await LocalReturnObject;
};

export { StartFunc };