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
    console.log("inData-----------",inData.SupplierName);
    let jVarLocalSupplierNameId = document.getElementById("ItemNameLabelId");
    let jVarCityId = document.getElementById("City");
    let jVarGSTId = document.getElementById("GST");
    let jVarPhoneId = document.getElementById("Phone");

    if (jVarLocalSupplierNameId !== null) {
        jVarLocalSupplierNameId.innerHTML = inData.SupplierName;
    };

    if (jVarCityId !== null) {
        jVarCityId.innerHTML = inData.GST;
    };
    if (jVarGSTId !== null) {
        jVarGSTId.innerHTML = inData.City;
    };
    if (jVarPhoneId !== null) {
        jVarPhoneId.innerHTML = inData.Phone;
    };

    console.log("sssssss : ", inData);
    // var template = Handlebars.compile(jVarLocalTemplate.innerHTML);

    // inData.forEach(element => {

    //     let jVarLocalToShowHtml = template(element);

    //     jVarLocalTableBodyId.insertAdjacentHTML("afterbegin", jVarLocalToShowHtml);
    // });

};

export { StartFunc };