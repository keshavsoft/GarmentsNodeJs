import { StartFunc as RowAndColumnsStartFunc } from "../../ApplyClasses.js";

let jFCreateFoldersToDom = async () => {
    let jVarLocalRoute = window.location.pathname.split("/")[1];
    // let jVarLocalFetchUrl = `/${jVarLocalRoute}/AdminApi/Utility/Json/Folder/ForTableColumns/AllInOneWithValues`;
    let jVarLocalFetchUrl = `/${jVarLocalRoute}/AdminApi/AsTree/Json/UserFolders/ScreensFromDisplayJson/TableColumns/DefaultValue`;
console.log("jVarLocalFetchUrl",jVarLocalFetchUrl);
    let jVarLocalFromFetch = await fetch(jVarLocalFetchUrl);
    let dataFromApi = await jVarLocalFromFetch.json();

    if (dataFromApi !== null) {
        RowAndColumnsStartFunc({ inDataFromApi: dataFromApi });

        let jVarLocalRawTemplate = document.getElementById("HbsTemplateForFoldersOnly").innerHTML;
        document.getElementById("KCont1").innerHTML = Handlebars.compile(jVarLocalRawTemplate)(dataFromApi);
    };

    return await dataFromApi;
};

export { jFCreateFoldersToDom }