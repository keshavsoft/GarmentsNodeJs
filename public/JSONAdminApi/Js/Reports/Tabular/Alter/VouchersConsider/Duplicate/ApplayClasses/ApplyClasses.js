let StartFunc = ({ inDataFromApi }) => {
    let jVarLocalQueryParams = jFgetUrlQueryParams();
    let jVarLocaldataFromApi = inDataFromApi;

    if (Object.keys(jVarLocalQueryParams).length > 0) {
        LocalForClassesFromUrl({
            indataFromApi: jVarLocaldataFromApi,
            inQueryParamsAsObject: jVarLocalQueryParams
        });
        Swal.fire('Duplicated Sucessfully..&#128522')

    } else {
        LocalForApplyClasses({ indataFromApi: jVarLocaldataFromApi });
    };
};


let jFgetUrlQueryParams = () => {
    var queryParams = {}, param;
    var params = window.location.search.substring(1).split("&");
    // console.log("params : ", params);
    for (var i = 0; i < params.length; i++) {
        param = params[i].split('=');
        // console.log("param : ", param);
        if (param.length === 2) {
            queryParams[param[0]] = param[1];
        };
    }
    return queryParams;
};



let LocalForApplyClasses = ({ indataFromApi }) => {
    console.log("indataFromApi", indataFromApi);
    let jVarLocalFirstFolder;
    if ("Reports" in indataFromApi.JsonData) {
        if (Object.values(indataFromApi.JsonData.Reports).length > 0) {
            jVarLocalFirstFolder = Object.values(indataFromApi.JsonData.Reports)[0];
            jVarLocalFirstFolder.TabPageClass = " show active";
            jVarLocalFirstFolder.MenuClass = " active";

        };
    };
};

let LocalForClassesFromUrl = ({ indataFromApi, inQueryParamsAsObject }) => {
    console.log("inQueryParamsAsObject",inQueryParamsAsObject);
    let jVarLocalReportName = inQueryParamsAsObject.inReportName;
    console.log("indataFromApi--", indataFromApi.JsonData.Reports);
    let jVarLocalFileName = inQueryParamsAsObject.inRowPK;
    if ("Reports" in indataFromApi.JsonData) {
        if (jVarLocalReportName in indataFromApi.JsonData.Reports) {
            indataFromApi.JsonData.Reports[jVarLocalReportName].TabPageClass = " show active";
            indataFromApi.JsonData.Reports[jVarLocalReportName].MenuClass = " active";
            indataFromApi.JsonData.Reports[jVarLocalReportName].VouchersConsider[jVarLocalFileName].RowClass = "table-success";


        };
    };
};

export { StartFunc }