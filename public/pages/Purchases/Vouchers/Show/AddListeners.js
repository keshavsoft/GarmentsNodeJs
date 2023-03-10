import { StartFunc as SaveFuncsStartFunc } from "./ButtonFuncs/InvTable/Footer/SaveFuncs.js";
import { StartFunc as ShowOnDomStartFunc } from "./ToDom/ShowOnDom.js";

let StartFunc = ({ inFolderName, inFileName, inItemName, inProjectName }) => {
    let jVarLocalInvTableFooterSaveButtonId = document.getElementById("InvTableFooterSaveButtonId");
    console.log("jVarLocalInvTableFooterSaveButtonId--------- : ", jVarLocalInvTableFooterSaveButtonId);
    if (jVarLocalInvTableFooterSaveButtonId !== null) {
        jVarLocalInvTableFooterSaveButtonId.addEventListener("click", async (event) => {
            let LocalFromSave = await SaveFuncsStartFunc({
                inFolderName, inFileName, inItemName, inProjectName,
                inEvent: event
            });
            console.log("LocalFromSave--------- : ", LocalFromSave);
  
            if (LocalFromSave.KTF) {
                // await ShowOnDomStartFunc({
                //     inFolderName, inFileName, inItemName, inProjectName,
                //     inShowSuccess: true
                // });
            };
        });
    };
};

export { StartFunc };