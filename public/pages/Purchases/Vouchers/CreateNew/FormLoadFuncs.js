//import { StartFunc as VeticalStartFunc } from "./FetchFuncs/HtmlPull/Vetical.js";
import { StartFunc as ForCreateNewStartFunc } from "./FetchFuncs/ForCreateNew.js";
import { StartFunc as SuppliersShowOnDom } from "./Suppliers/ShowOnDom.js";

let StartFunc = async ({ inFolderName, inFileName, inItemName, inProjectName }) => {
    // await ShowOnDom();
    await SuppliersShowOnDom({ inProjectName });
    await ShowOnDomDefaultValuesFromFetch({ inFolderName, inFileName, inItemName, inProjectName });
};

// let ShowOnDom = async () => {
//     let jVarLocalVerticalId = document.getElementById("VerticalId");

//     let jVarLocalVeticalHtml = await VeticalStartFunc();

//     if (jVarLocalVeticalHtml.KTF) {
//         jVarLocalVerticalId.innerHTML = jVarLocalVeticalHtml.HtmlString;
//     };
// };

let ShowOnDomDefaultValuesFromFetch = async ({ inFolderName, inFileName, inItemName, inProjectName }) => {
    let LocalDataFromFetch = await ForCreateNewStartFunc({ inFolderName, inFileName, inItemName, inProjectName });

    if (LocalDataFromFetch.KTF) {
        let jVarLocalDateId = document.getElementById('DateId');
        let jVarLocalBillNumberId = document.getElementById('BillNumberId');

        if ("Date" in LocalDataFromFetch.JsonData) {
            jVarLocalDateId.value = LocalDataFromFetch.JsonData.Date;
        };

        if ("BillNumber" in LocalDataFromFetch.JsonData) {
            jVarLocalBillNumberId.value = LocalDataFromFetch.JsonData.BillNumber;
        };
    };
};

export { StartFunc };