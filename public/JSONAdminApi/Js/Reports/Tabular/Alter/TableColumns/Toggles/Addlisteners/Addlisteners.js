let jFUpdateFunc = () => {
    let jVarLocalUpdateClassName = document.getElementsByClassName("UpdateButtonClass");

    for (let i = 0; i < jVarLocalUpdateClassName.length; i++) {
        jVarLocalUpdateClassName[i].addEventListener("click", jFLocalUpdateClickFunc)
    };

};
let jFLocalUpdateClickFunc = async (event) => {
    let jVarLocalCurrentTarget = event.currentTarget;
    let jVarLocalItemName = jVarLocalCurrentTarget.dataset.item;

    let jVarLocalvoucherName = jVarLocalCurrentTarget.dataset.voucher;

    let jVarLocalColsestTr = jVarLocalCurrentTarget.closest("tr");
    let jVarLocalDataAttribute = jVarLocalColsestTr.querySelector('[name="DataAttribute"]');
    let jVarLocalDisplayName = jVarLocalColsestTr.querySelector('[name="DisplayName"]');
    let jVarLocalCreateNew = jVarLocalColsestTr.querySelector('[name="CreateNew"]');
    let jVarLocalInsert = jVarLocalColsestTr.querySelector('[name="Insert"]');
    let jVarLocalShowInTable = jVarLocalColsestTr.querySelector('[name="ShowInTable"]');


    let jVarLocalDataAttributeValue = jVarLocalDataAttribute.value;
    let jVarLocalDisplayNameValue = jVarLocalDisplayName.value;
    let jVarLocalCreateNewValue = jVarLocalCreateNew.checked;
    let jVarLocalInsertValue = jVarLocalInsert.checked;
    let jVarLocalShowInTableValue = jVarLocalShowInTable.checked;

    let BodyAsJson = {
        DataAttribute: jVarLocalDataAttributeValue,
        DisplayName: jVarLocalDisplayNameValue,
        CreateNew: jVarLocalCreateNewValue,
        Insert: jVarLocalInsertValue,
        ShowInTable: jVarLocalShowInTableValue

    };

    let jFetchUrl = "/JSONAdminApi/AdminApi/AsTree/Json/UserFolders/ReportsFolder/LedgerAutoJsonFile/FromReports/FromTableColumns/FromKeys/Toggles";
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
    };
    let response = await fetch(jFetchUrl, jVarLocalRequestHeader);

    switch (response.status) {
        case 200:
            let jVarLocalNewLocation = "";
            jVarLocalNewLocation += `?inReportName=${jVarLocalItemName}`
            jVarLocalNewLocation += `&inRowPK=${jVarLocalvoucherName}`
            window.location = jVarLocalNewLocation;

            break;

        case 204:
            Swal.fire('Not Update Data..&#128531')
            break;
        default:
        // code block
    };
};

export { jFUpdateFunc };