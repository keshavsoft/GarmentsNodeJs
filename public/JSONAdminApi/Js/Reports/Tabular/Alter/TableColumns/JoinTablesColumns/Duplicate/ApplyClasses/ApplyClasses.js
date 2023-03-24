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
    let jVarLocalReportName;
    let jVarLocalFirstReport;

    if ("ReportsObject" in indataFromApi) {
        if (Object.values(indataFromApi.ReportsObject).length > 0) {
            jVarLocalReportName = Object.values(indataFromApi.ReportsObject)[0];
            jVarLocalReportName.TabPageClass = " show active";
            jVarLocalReportName.MenuClass = " active";

            if ("VouchersConsiderObject" in jVarLocalReportName) {
                if (Object.values(jVarLocalReportName.VouchersConsiderObject).length > 0) {
                    jVarLocalFirstReport = Object.values(jVarLocalReportName.VouchersConsiderObject)[0];
                    jVarLocalFirstReport.TabPaneClass = " show active";
                    jVarLocalFirstReport.ButtonClass = " active";
                };

            };

        };
    };
};

let LocalForClassesFromUrl = ({ indataFromApi, inQueryParamsAsObject }) => {
    console.log("inQueryParamsAsObject", indataFromApi);

    let jVarLocalReportName = inQueryParamsAsObject.inReportName;
    let jVarLocalVoucherConsiderPk = inQueryParamsAsObject.voucherconsiderpk;
    let jVarLocalcolumnpk = inQueryParamsAsObject.columnpk;


    if ("ReportsObject" in indataFromApi) {
        if (jVarLocalReportName in indataFromApi.ReportsObject) {
            indataFromApi.ReportsObject[jVarLocalReportName].TabPageClass = " show active";
            indataFromApi.ReportsObject[jVarLocalReportName].MenuClass = " active";

            if ("VouchersConsiderObject" in indataFromApi.ReportsObject[jVarLocalReportName]) {
                console.log('KKK',indataFromApi.ReportsObject[jVarLocalReportName].VouchersConsiderObject[jVarLocalVoucherConsiderPk]);
                if (jVarLocalVoucherConsiderPk in indataFromApi.ReportsObject[jVarLocalReportName].VouchersConsiderObject) {
                    indataFromApi.ReportsObject[jVarLocalReportName].VouchersConsiderObject[jVarLocalVoucherConsiderPk].TabPaneClass = " show active";
                    indataFromApi.ReportsObject[jVarLocalReportName].VouchersConsiderObject[jVarLocalVoucherConsiderPk].ButtonClass = " active";
                    indataFromApi.ReportsObject[jVarLocalReportName].VouchersConsiderObject[jVarLocalVoucherConsiderPk].JoinTablesColumnsObject[jVarLocalcolumnpk].RowClass = "table-success";

                };
            };

        };
    };

};

export { StartFunc }