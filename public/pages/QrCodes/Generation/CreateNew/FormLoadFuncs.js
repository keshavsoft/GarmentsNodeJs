import { StartFunc as VeticalStartFunc } from "./FetchFuncs/HtmlPull/Vetical.js";
import { StartFunc as ForCreateNewStartFunc } from "./FetchFuncs/ForCreateNew.js";
import { StartFunc as SuppliersStartFunc } from "./Suppliers/ShowOnDom.js";
import { StartFunc as ItemsStartFunc } from "./Items/ShowOnDom.js";

let StartFunc = async ({ inFolderName, inFileName, inItemName, inProjectName }) => {
    await SuppliersStartFunc({ inProjectName });
    await ItemsStartFunc({ inProjectName });

    if (document.getElementById('ItemsDataListId')) {
        var element = document.getElementById('ItemsDataListId');
        const example = new Choices(element);
    };

    if (document.getElementById('SupplierNameSelectId')) {
        var element = document.getElementById('SupplierNameSelectId');
        const example = new Choices(element);
    };

    // await ShowOnDom();
    await ShowOnDomDefaultValuesFromFetch({ inFolderName, inFileName, inItemName, inProjectName });
};

let ShowOnDom = async () => {
    let jVarLocalVerticalId = document.getElementById("VerticalId");

    let jVarLocalVeticalHtml = await VeticalStartFunc();

    if (jVarLocalVeticalHtml.KTF) {
        jVarLocalVerticalId.innerHTML = jVarLocalVeticalHtml.HtmlString;
    };
};

let ShowOnDomDefaultValuesFromFetch = async ({ inFolderName, inFileName, inItemName, inProjectName }) => {

    let LocalDataFromFetch = await ForCreateNewStartFunc({ inFolderName, inFileName, inItemName, inProjectName });

    if (LocalDataFromFetch.KTF) {
        let jVarLocalBarcodeId = document.getElementById('BarcodeId');

        if ("Barcode" in LocalDataFromFetch.JsonData) {
            if (jVarLocalBarcodeId !== null) {
                jVarLocalBarcodeId.value = LocalDataFromFetch.JsonData.Barcode;

            }
        };

        // if ("BillNumber" in LocalDataFromFetch.JsonData) {
        //     jVarLocalBillNumberId.value = LocalDataFromFetch.JsonData.BillNumber;
        // };
    };
};
export { StartFunc };