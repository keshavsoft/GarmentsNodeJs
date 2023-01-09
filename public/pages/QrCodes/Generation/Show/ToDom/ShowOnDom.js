import { FromNode } from "../PullData/FetchFuncs.js";
import { ReturnRowPK } from "../urlSearchParams.js";

let StartFunc = async ({ inFolderName, inFileName, inItemName, inProjectName }) => {
    let jVarLocalRowPk = ReturnRowPK();

    let jVarLocalData = await FromNode({
        inFolderName,
        inFileName,
        inItemName,
        inRowPK: jVarLocalRowPk.RowPK,
        inProjectName
    });

    if (jVarLocalData.KTF) {
        ShowOnDom({ inData: jVarLocalData.JsonData });
    };
};

let ShowOnDom = ({ inData }) => {
    let jVarLocalItemNameId = document.getElementById("ItemNameLabelId");
    let jVarLocalBarcodeId = document.getElementById("BarcodeId");
    let jVarLocalProductAliasNameId = document.getElementById("ProductAliasNameId");
    let jVarLocalCostPriceId = document.getElementById("CostPriceId");
    let jVarLocalSalePriceId = document.getElementById("SalePriceId");
    let jVarLocalPersentageId = document.getElementById("PersentageId");

    if (jVarLocalItemNameId !== null) {
        jVarLocalItemNameId.innerHTML = inData.ProductName;
    };
    if (jVarLocalBarcodeId !== null) {
        jVarLocalBarcodeId.innerHTML = inData.Barcode;
    };
    if (jVarLocalProductAliasNameId !== null) {
        jVarLocalProductAliasNameId.innerHTML = inData.ProductAliasName;
    };
    if (jVarLocalCostPriceId !== null) {
        jVarLocalCostPriceId.innerHTML = inData.CostPrice;
    };

    if (jVarLocalSalePriceId !== null) {
        jVarLocalSalePriceId.innerHTML = inData.SalePrice;
    };
    if (jVarLocalPersentageId !== null) {
        jVarLocalPersentageId.innerHTML = inData.Persentage;
    };

    console.log("sssssss : ", inData);
    // var template = Handlebars.compile(jVarLocalTemplate.innerHTML);

    // inData.forEach(element => {

    //     let jVarLocalToShowHtml = template(element);

    //     jVarLocalTableBodyId.insertAdjacentHTML("afterbegin", jVarLocalToShowHtml);
    // });

};

export { StartFunc };