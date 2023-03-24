let StartFunc = ({ inDataFromApi }) => {
    let jVarLocalQueryParams = jFgetUrlQueryParams();
    let jVarLocaldataFromApi = inDataFromApi;

    if (Object.keys(jVarLocalQueryParams).length > 0) {
        LocalForClassesFromUrl({
            indataFromApi: jVarLocaldataFromApi,
            inQueryParamsAsObject: jVarLocalQueryParams
        });
        Swal.fire('Updated Sucessfully..&#128522')

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
    if ("Reports" in indataFromApi) {
        if (Object.values(indataFromApi.Reports).length > 0) {
            jVarLocalFirstFolder = Object.values(indataFromApi.Reports)[0];
            jVarLocalFirstFolder.TabPageClass = " show active";
            jVarLocalFirstFolder.MenuClass = " active";

        };
    };
};

let LocalForClassesFromUrl = ({ indataFromApi, inQueryParamsAsObject }) => {
    console.log("inQueryParamsAsObject",inQueryParamsAsObject);
    let jVarLocalReportName = inQueryParamsAsObject.inReportName;
    console.log("indataFromApi--", indataFromApi.Reports);
    let jVarLocalFileName = inQueryParamsAsObject.inRowPK;
    if ("Reports" in indataFromApi) {
        if (jVarLocalReportName in indataFromApi.Reports) {
            indataFromApi.Reports[jVarLocalReportName].TabPageClass = " show active";
            indataFromApi.Reports[jVarLocalReportName].MenuClass = " active";
            indataFromApi.Reports[jVarLocalReportName].VouchersConsider[jVarLocalFileName].RowClass = "table-success";


        };
    };
};

export { StartFunc }