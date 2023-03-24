import { StartFunc as ApplyClassesStartFunc } from "../ApplayClasses/ApplyClasses.js";

let jFCreateFoldersToDom = async () => {
    let jVarLocalRoute = window.location.pathname.split("/")[1];
    let jVarLocalFetchUrl = `/${jVarLocalRoute}/AdminApi/AsTree/Json/UserFolders/ReportsFolder/LedgerAutoJsonFile/FromReports/FromTableColumns/FromKeys/Toggles`;

    let jVarLocalFromFetch = await fetch(jVarLocalFetchUrl);
    let dataFromApiJsonData = await jVarLocalFromFetch.json();
    let dataFromApi = dataFromApiJsonData.JsonData;
console.log("dataFromApi",dataFromApi );
    if (dataFromApi !== null) {
        ApplyClassesStartFunc({ inDataFromApi: dataFromApi });

        let jVarLocalRawTemplate = document.getElementById("HbsTemplateForFoldersOnly").innerHTML;
        document.getElementById("KCont1").innerHTML = Handlebars.compile(jVarLocalRawTemplate)(dataFromApi);
    };

    return await dataFromApi;
};

export { jFCreateFoldersToDom }