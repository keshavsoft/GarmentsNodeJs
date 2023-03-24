let jFCloneFunc = () => {
    let jVarLocalCloneClassName = document.getElementsByClassName("CloneButtonClass");

    for (let i = 0; i < jVarLocalCloneClassName.length; i++) {
        jVarLocalCloneClassName[i].addEventListener("click", jFLocalClickFunc)
    };

};
let jFLocalClickFunc = async (event) => {
    let jVarLocalCurrentTarget = event.currentTarget;
    let jVarLocalvoucherName = jVarLocalCurrentTarget.dataset.report;
    let jVarLocalColsestTr = jVarLocalCurrentTarget.closest("tr");
    let jVarLocalReportItem = jVarLocalColsestTr.querySelector('[name="ReportItem"]');

    let jVarLocalReportItemValue = jVarLocalReportItem.value;

    let jFetchUrl = "/JSONAdminApi/AdminApi/AsTree/Json/UserFolders/ReportsFolder/LedgerAutoJsonFile/FromReports/AsTable";
    let jVarLocalRequestHeader = {
        method: "PATCH",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ReportName: jVarLocalvoucherName,
            CloneName: jVarLocalReportItemValue,
        })
    };
    let response = await fetch(jFetchUrl, jVarLocalRequestHeader);

    switch (response.status) {
        case 200:
            let jVarLocalNewLocation = `?inReportName=${jVarLocalvoucherName}`
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