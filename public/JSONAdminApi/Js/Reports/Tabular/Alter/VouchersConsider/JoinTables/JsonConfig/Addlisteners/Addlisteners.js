let jFCloneFunc = () => {
    let jVarLocalCloneClassName = document.getElementsByClassName("UpdateButtonClass");

    for (let i = 0; i < jVarLocalCloneClassName.length; i++) {
        jVarLocalCloneClassName[i].addEventListener("click", jFLocalUpdateClickFunc)
    };

};
let jFLocalUpdateClickFunc = async (event) => {
    let jVarLocalCurrentTarget = event.currentTarget;
    let jVarLocalreportname = jVarLocalCurrentTarget.dataset.reportname;
    let jVarLocalvoucherconsiderpk = jVarLocalCurrentTarget.dataset.voucherconsiderpk;
    let jVarLocalColumnPk = jVarLocalCurrentTarget.dataset.jointable;

    let jVarLocalColsestTr = jVarLocalCurrentTarget.closest("tr");
    let jVarLocalDisplayColumn = jVarLocalColsestTr.querySelector('[name="UserFolderName"]');
    let jVarLocalTransformType = jVarLocalColsestTr.querySelector('[name="inFolderName"]');
    let jVarLocalDefaultValue = jVarLocalColsestTr.querySelector('[name="inJsonFileName"]');

    let jVarLocalDisplayColumnValue = jVarLocalDisplayColumn.value;
    let jVarLocalTransformTypeValue = jVarLocalTransformType.value;
    let jVarLocalDefaultValueValue = jVarLocalDefaultValue.value;


    let BodyAsJson = {
        UserFolderName: jVarLocalDisplayColumnValue,
        inFolderName: jVarLocalTransformTypeValue,
        inJsonFileName: jVarLocalDefaultValueValue
    };

    // let jFetchUrl = "/JSONAdminApi/AdminApi/AsTree/Json/UserFolders/ReportsFolder/LedgerAutoJsonFile/FromReports/AsTable";
    let jFetchUrl = "/JSONAdminApi/AdminApi/AsTree/Json/UserFolders/ReportsFolder/LedgerAutoJsonFile/FromReports/FromVoucherConsider/FromJoinTables/JsonConfig";
    let jVarLocalRequestHeader = {
        method: "PATCH",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            inReportName: jVarLocalreportname,
            inVouchersConsiderPK: jVarLocalvoucherconsiderpk,
            JoinTablesColumnsPK: jVarLocalColumnPk,
            BodyAsJson
        })
    };
    let response = await fetch(jFetchUrl, jVarLocalRequestHeader);

    switch (response.status) {
        case 200:
            let jVarLocalNewLocation = "";
            jVarLocalNewLocation += `?inReportName=${jVarLocalreportname}`
            jVarLocalNewLocation += `&voucherconsiderpk=${jVarLocalvoucherconsiderpk}`
            jVarLocalNewLocation += `&columnpk=${jVarLocalColumnPk}`
            window.location = jVarLocalNewLocation;
            break;

        case 204:
            Swal.fire('Not Update Data')
            break;
        default:
        // code block
    };
};

export { jFCloneFunc };