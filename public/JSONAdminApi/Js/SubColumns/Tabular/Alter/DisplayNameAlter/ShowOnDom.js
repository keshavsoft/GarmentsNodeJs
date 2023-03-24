//import { jFStartFunc as ApplyClassesjFStartFunc } from "./ApplyClasses.js";
import { StartFunc as ApplyClassesStartFunc } from "../../ApplyClasses.js";

let jFCreateFoldersToDom = async () => {
    let jVarLocalRoute = window.location.pathname.split("/")[1];
    // let jVarLocalFetchUrl = `/${jVarLocalRoute}/AdminApi/Utility/Json/Folder/ForTableColumns/FromKeys/Toggles`;
    let jVarLocalFetchUrl = `/${jVarLocalRoute}/AdminApi/AsTree/Json/UserFolders/ScreensFromDisplayJson/SubTableColumns/DisplayNameAlter`;

    let jVarLocalFromFetch = await fetch(jVarLocalFetchUrl);
    let dataFromApi = await jVarLocalFromFetch.json();
    console.log("dataFromApi",dataFromApi);

    if (dataFromApi !== null) {
        ApplyClassesStartFunc({ inDataFromApi: dataFromApi });

        let jVarLocalRawTemplate = document.getElementById("HbsTemplateForFoldersOnly").innerHTML;
        document.getElementById("KCont1").innerHTML = Handlebars.compile(jVarLocalRawTemplate)(dataFromApi);
    };

    return await dataFromApi;
};

export { jFCreateFoldersToDom }