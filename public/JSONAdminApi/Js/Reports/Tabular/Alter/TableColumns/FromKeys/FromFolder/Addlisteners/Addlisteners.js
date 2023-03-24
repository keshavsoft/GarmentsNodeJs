let jFUpdateFunc = () => {
    let jVarLocalUpdateClassName = document.getElementsByClassName("UpdateButtonClass");

    for (let i = 0; i < jVarLocalUpdateClassName.length; i++) {
        jVarLocalUpdateClassName[i].addEventListener("click", jFLocalClickFunc)
    };

};
let jFLocalClickFunc = (event) => {
    let jVarLocalCurrentTarget = event.currentTarget;
    let jVarLocalItemName = jVarLocalCurrentTarget.dataset.item;

    let jVarLocalvoucherName = jVarLocalCurrentTarget.dataset.voucher;

    let jVarLocalColsestTr = jVarLocalCurrentTarget.closest("tr");
    let jVarLocalFolderName = jVarLocalColsestTr.querySelector('[name="FromFolder"]');
    let jVarLocalFileName = jVarLocalColsestTr.querySelector('[name="ItemNameConsider"]');
    let jVarLocalJsonFileConsider = jVarLocalColsestTr.querySelector('[name="JsonFileConsider"]');


    let jVarLocalFolderNameValue = jVarLocalFolderName.checked;
    let jVarLocalFileNameValue = jVarLocalFileName.checked;
    let jVarLocalJsonFileConsiderValue = jVarLocalJsonFileConsider.checked;


    let BodyAsJson = {
        FromFolder: jVarLocalFolderNameValue,
        ItemNameConsider: jVarLocalFileNameValue,
        JsonFileConsider: jVarLocalJsonFileConsiderValue

    };

    let jFetchUrl = "/JSONAdminApi/AdminApi/AsTree/Json/UserFolders/ReportsFolder/LedgerAutoJsonFile/FromReports/FromVoucherConsider/FromKeys/FromFolder";
    let jVarLocalRequestHeader = {
        method: "PATCH",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ItemName: jVarLocalItemName,
            voucher: jVarLocalvoucherName,
            BodyAsJson
        })
    }
    let response = fetch(jFetchUrl, jVarLocalRequestHeader);

    switch (response.status) {
        case 200:
            let jVarLocalNewLocation = "";
            jVarLocalNewLocation += `?inReportName=${jVarLocalItemName}`
            jVarLocalNewLocation += `&inRowPK=${jVarLocalvoucherName}`
          //  window.location = jVarLocalNewLocation;

            break;

        case 204:
            Swal.fire('Not Update Data')
            break;
        default:
        // code block
    };
};

export { jFUpdateFunc };