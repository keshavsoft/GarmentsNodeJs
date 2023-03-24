import { StartFunc as ForCreateNewStartFunc } from "./FetchFuncs/ForCreateNew.js";
import { StartFunc as SuppliersStartFunc } from "./Suppliers/ShowOnDom.js";
import { StartFunc as ItemsStartFunc } from "./Items/ShowOnDom.js";
import { StartFunc as FromUrlStartFunc } from "./FromUrl.js";

let StartFunc = async ({ inFolderName, inFileName, inItemName, inProjectName }) => {
   // await SuppliersStartFunc({ inProjectName });
    await ItemsStartFunc({ inProjectName });

    if (document.getElementById('ItemsDataListId')) {
        var element = document.getElementById('ItemsDataListId');
        const example = new Choices(element);
    };

    // if (document.getElementById('SupplierNameSelectId')) {
    //     var element = document.getElementById('SupplierNameSelectId');
    //     const example = new Choices(element);
    // };

    FromUrlStartFunc();
    await ShowOnDomDefaultValuesFromFetch({ inFolderName, inFileName, inItemName, inProjectName });
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
    };
};
export { StartFunc };