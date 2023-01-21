import { StartFunc as FetchFunc } from "./FetchFunc.js";

let StartFunc = async ({ inProjectName }) => {
    let jVarLocalFromFetch = await FetchFunc({ inProjectName });
    console.log("jVarLocalFromFetch : ", jVarLocalFromFetch);
    if (jVarLocalFromFetch.KTF) {
        let jVarLocalItemsDataListId = document.getElementById("ItemsDataListId");

        if (jVarLocalItemsDataListId !== null) {
            var options = '';

            for (var i = 0; i < jVarLocalFromFetch.JsonData.length; i++) {
                options += `<option value="${jVarLocalFromFetch.JsonData[i].SupplierName}">${jVarLocalFromFetch.JsonData[i].SupplierName}</option>`;
            }

            jVarLocalItemsDataListId.innerHTML = options;
        };
    };
};

export { StartFunc };