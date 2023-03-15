import { FromNode } from "../PullData/FetchFuncs.js";
import { ReturnRowPK } from "../urlSearchParams.js";
import { StartFunc as InvGridStartFunc } from "./InvGrid.js";

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
        await ShowOnDom({ inData: jVarLocalData.JsonData });
    };
};

let ShowOnDom = async ({ inData }) => {
    let jVarLocalBillNumberId = document.getElementById("BillNumberId");
    let jVarLocalGSTId = document.getElementById("GSTId");

    if (jVarLocalBillNumberId !== null) {
        jVarLocalBillNumberId.innerHTML = inData.BillNumber;
    };

    if (jVarLocalGSTId !== null) {
        jVarLocalGSTId.value = inData.GST;
    };

    await InvGridStartFunc({ inData });
};

export { StartFunc };