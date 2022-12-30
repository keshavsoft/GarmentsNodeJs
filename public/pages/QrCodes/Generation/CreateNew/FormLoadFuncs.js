import { StartFunc as VeticalStartFunc } from "./FetchFuncs/HtmlPull/Vetical.js";
import { StartFunc as ForCreateNewStartFunc } from "./FetchFuncs/ForCreateNew.js";

let StartFunc = async ({ inFolderName, inFileName, inItemName, inProjectName }) => {
    await ShowOnDom();
    await ShowOnDomDefaultValuesFromFetch({ inFolderName, inFileName, inItemName, inProjectName });
};

let ShowOnDom = async () => {
    let jVarLocalVerticalId = document.getElementById("VerticalId");

    let jVarLocalVeticalHtml = await VeticalStartFunc();

    if (jVarLocalVeticalHtml.KTF) {
        jVarLocalVerticalId.innerHTML = jVarLocalVeticalHtml.HtmlString;
    };
};

// let ShowOnDomDefaultValuesFromFetch = async ({ inFolderName, inFileName, inItemName, inProjectName }) => {
//     let LocalDataFromFetch = await ForCreateNewStartFunc({ inFolderName, inFileName, inItemName, inProjectName });

//     console.log("cccccccccccc : ", LocalDataFromFetch);
// };


let ShowOnDomDefaultValuesFromFetch = async ({ inFolderName, inFileName, inItemName, inProjectName }) => {
    
    let LocalDataFromFetch = await ForCreateNewStartFunc({ inFolderName, inFileName, inItemName, inProjectName });
 console.log("jatin",LocalDataFromFetch );

    if (LocalDataFromFetch.KTF) {
        console.log("123333", );
        let jVarLocalBarcodeId = document.getElementById('BarcodeId');
        // let jVarLocalBillNumberId = document.getElementById('BillNumberId');
        console.log("ssssss",LocalDataFromFetch);

        if ("Barcode" in LocalDataFromFetch.JsonData) {
            console.log(jVarLocalBarcodeId,LocalDataFromFetch.JsonData.Barcode );
            jVarLocalBarcodeId.value = LocalDataFromFetch.JsonData.Barcode;
        };

        // if ("BillNumber" in LocalDataFromFetch.JsonData) {
        //     jVarLocalBillNumberId.value = LocalDataFromFetch.JsonData.BillNumber;
        // };
    };
};
export { StartFunc };