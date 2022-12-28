//import { StartFunc as PushDataStartFunc } from "./PushData/FetchFuncs.js";
import { StartFunc as UpdateFuncsStartFunc } from "../FetchFuncs/UpdateFuncs.js";

let StartFunc = async ({ inFolderName, inFileName, inItemName, inProjectName }) => {
    let jVarLocalFromUpdate = await UpdateFuncsStartFunc({
        inFolderName, inFileName, inItemName,
        inProjectName
    });

    if (jVarLocalFromUpdate.KTF) {
        window.location = `../ShowAll/ShowAll.html?FromEdit=true&RowPK=${jVarLocalFromUpdate.RowPK}`;
    } else {
        Swal.fire(
            'The Internet?',
            `${jVarLocalFromUpdate.KReason}`,
            'question'
        )
    };
};

export { StartFunc };