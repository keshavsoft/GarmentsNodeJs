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
    let jVarLocalTableBodyId = document.getElementById("TableBodyId");
    let jVarLocalTemplate = document.getElementById("TemplateForRow");
    let jVarLocalItemNameId = document.getElementById("ItemNameId");
    let jVarLocalGSTId = document.getElementById("GSTId");

    jVarLocalItemNameId.value = inData.ItemName;
    jVarLocalGSTId.value = inData.GST;

    console.log("sssssss : ", inData);
    // var template = Handlebars.compile(jVarLocalTemplate.innerHTML);

    // inData.forEach(element => {

    //     let jVarLocalToShowHtml = template(element);

    //     jVarLocalTableBodyId.insertAdjacentHTML("afterbegin", jVarLocalToShowHtml);
    // });

};

export { StartFunc };