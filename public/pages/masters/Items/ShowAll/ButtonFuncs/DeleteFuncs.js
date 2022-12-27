//import { StartFunc as PushDataStartFunc } from "./PushData/FetchFuncs.js";
import { StartFunc as DeleteFuncsStartFunc } from "../FetchFuncs/DeleteFuncs.js";

let StartFunc = ({ inFolderName, inFileName, inItemName, inProjectName, inEvent }) => {
    let jVarLocalCurrentTarget = inEvent.currentTarget;
    let jVarLocalDataSet = jVarLocalCurrentTarget.dataset;
    let jVarLocalDataSetKeyNeeded = "rowpk";
    console.log("------ : ", jVarLocalDataSet);

    if (jVarLocalDataSetKeyNeeded in jVarLocalDataSet) {
        let jVarLocalRowPK = jVarLocalDataSet[jVarLocalDataSetKeyNeeded];
        DeleteFuncsStartFunc({
            inFolderName, inFileName, inItemName,
            inProjectName,
            inRowPK: jVarLocalRowPK
        });

        //console.log("jVarLocalRowPK : ", jVarLocalRowPK);
    };
};

export { StartFunc };