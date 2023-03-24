let jFCloneFunc = () => {
    let jVarLocalCloneClassName = document.getElementsByClassName("UpdateButtonClass");

    for (let i = 0; i < jVarLocalCloneClassName.length; i++) {
        jVarLocalCloneClassName[i].addEventListener("click", jFLocalClickFunc)
    };

};
let jFLocalClickFunc = async (event) => {
    let jVarLocalCurrentTarget = event.currentTarget;
    let jVarLocalreportname = jVarLocalCurrentTarget.dataset.reportname;
    let jVarLocalvoucherconsiderpk = jVarLocalCurrentTarget.dataset.voucherconsiderpk;
    let jVarLocalColumnPk = jVarLocalCurrentTarget.dataset.columnpk;

    let jVarLocalColsestTr = jVarLocalCurrentTarget.closest("tr");
    let jVarLocalConsiderJoinTable = jVarLocalColsestTr.querySelector('[name="ConsiderJoinTable"]');
    let jVarLocalTransformTF = jVarLocalColsestTr.querySelector('[name="TransformTF"]');


    let jVarLocalConsiderJoinTableValue = jVarLocalConsiderJoinTable.checked;
    let jVarLocalTransformTFValue = jVarLocalTransformTF.checked;


    let BodyAsJson = {

        ConsiderJoinTable: jVarLocalConsiderJoinTableValue,
        TransformTF: jVarLocalTransformTFValue
    };

    // let jFetchUrl = "/JSONAdminApi/AdminApi/AsTree/Json/UserFolders/ReportsFolder/LedgerAutoJsonFile/FromReports/AsTable";
    let jFetchUrl = "/JSONAdminApi/AdminApi/AsTree/Json/UserFolders/ReportsFolder/LedgerAutoJsonFile/VouchersConsider/Columns/DisplayColumn";
    let jVarLocalRequestHeader = {
        method: "PATCH",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            reportname: jVarLocalreportname,
            voucherconsiderpk: jVarLocalvoucherconsiderpk,
            columnpk: jVarLocalColumnPk,
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