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
    let jVarLocalColumnPk = jVarLocalCurrentTarget.dataset.jointablescolumnspk;
    console.log("ddddddddddd",jVarLocalColumnPk);

    let jVarLocalColsestTr = jVarLocalCurrentTarget.closest("tr");
    let jVarLocalDisplayColumn = jVarLocalColsestTr.querySelector('[name="Name"]');
    let jVarLocalTransformType = jVarLocalColsestTr.querySelector('[name="DisplayColumn"]');
    let jVarLocalDefaultValue = jVarLocalColsestTr.querySelector('[name="TransformType"]');
    let jVarLocalConsiderJoinTable = jVarLocalColsestTr.querySelector('[name="JoinTable"]');
    let jVarLocalTransformTF = jVarLocalColsestTr.querySelector('[name="ConsiderJoinTable"]');

    let jVarLocalDisplayColumnValue = jVarLocalDisplayColumn.value;
    let jVarLocalTransformTypeValue = jVarLocalTransformType.value;
    let jVarLocalDefaultValueValue = jVarLocalDefaultValue.value;
    let jVarLocalConsiderJoinTableValue = jVarLocalConsiderJoinTable.value;
    let jVarLocalTransformTFValue = jVarLocalTransformTF.checked;


    let BodyAsJson = {
        Name: jVarLocalDisplayColumnValue,
        DisplayColumn: jVarLocalTransformTypeValue,
        TransformType: jVarLocalDefaultValueValue,
        JoinTable: jVarLocalConsiderJoinTableValue,
        ConsiderJoinTable: jVarLocalTransformTFValue
    };

    // let jFetchUrl = "/JSONAdminApi/AdminApi/AsTree/Json/UserFolders/ReportsFolder/LedgerAutoJsonFile/FromReports/AsTable";
    let jFetchUrl = "/JSONAdminApi/AdminApi/AsTree/Json/UserFolders/ReportsFolder/LedgerAutoJsonFile/FromReports/FromVoucherConsider/FromJoinTablesColumns/DisplayColumn";
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