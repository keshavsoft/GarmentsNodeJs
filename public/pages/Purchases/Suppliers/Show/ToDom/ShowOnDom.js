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
    let jVarLocalSupplierNameId = document.getElementById("SupplierName");
    let jVarCityId = document.getElementById("City");
    let jVarGSTId = document.getElementById("GST");
    let jVarPhoneId = document.getElementById("Phone");

    if (jVarLocalSupplierNameId !== null) {
        jVarLocalSupplierNameId.value = inData.SupplierName;
    };

    if (jVarCityId !== null) {
        jVarCityId.value = inData.GST;
    };
    if (jVarGSTId !== null) {
        jVarGSTId.value = inData.City;
    };
    if (jVarPhoneId !== null) {
        jVarPhoneId.value = inData.Phone;
    };

    console.log("sssssss : ", inData);
    // var template = Handlebars.compile(jVarLocalTemplate.innerHTML);

    // inData.forEach(element => {

    //     let jVarLocalToShowHtml = template(element);

    //     jVarLocalTableBodyId.insertAdjacentHTML("afterbegin", jVarLocalToShowHtml);
    // });

};

export { StartFunc };