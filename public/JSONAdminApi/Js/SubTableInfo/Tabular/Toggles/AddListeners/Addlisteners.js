let jFUpdateFunc = () => {
    let jVarLocalUpdateClassName = document.getElementsByClassName("UpdateButtonClass");

    for (let i = 0; i < jVarLocalUpdateClassName.length; i++) {
        jVarLocalUpdateClassName[i].addEventListener("click", jFLocalClickFunc)
    };
};

let jFLocalClickFunc = async (event) => {
    let jVarLocalCurrentTarget = event.currentTarget;
    let jVarLocalFolderName = jVarLocalCurrentTarget.dataset.foldername;
    let jVarLocalfilename = jVarLocalCurrentTarget.dataset.filename;
    let jVarLocalitemname = jVarLocalCurrentTarget.dataset.itemname;
    let jVarLocalscreenname = jVarLocalCurrentTarget.dataset.screenname;
    let jVarLocalGridName = jVarLocalCurrentTarget.dataset.gridname;

    let jVarLocalColsestTr = jVarLocalCurrentTarget.closest("tr");
    let jVarLocalColumnReOrder = jVarLocalColsestTr.querySelector('[name="ShowFooter"]');
    let jVarLocalShowFooter = jVarLocalColsestTr.querySelector('[name="HeadRowSearch"]');
    let jVarLocalDataAttributesFromTableInfo = jVarLocalColsestTr.querySelector('[name="DataAttributesFromTableInfo"]');
    let jVarLocalDataAttributesFromTableDataRow = jVarLocalColsestTr.querySelector('[name="DataAttributesFromTableDataRow"]');

    let jVarLocalColumnReOrderValue = jVarLocalColumnReOrder.checked
    let jVarLocalShowFooterValue = jVarLocalShowFooter.checked
    let jVarLocalDataAttributesFromTableInfoValue = jVarLocalDataAttributesFromTableInfo.checked
    let jVarLocalDataAttributesFromTableDataRowValue = jVarLocalDataAttributesFromTableDataRow.checked

    let BodyAsJson = {
        ColumnReOrder: jVarLocalColumnReOrderValue,
        ShowFooter: jVarLocalShowFooterValue,
        DataAttributesFromTableInfo: jVarLocalDataAttributesFromTableInfoValue,
        DataAttributesFromTableDataRow: jVarLocalDataAttributesFromTableDataRowValue
    }

    let jFetchUrl = "/JSONAdminApi/AdminApi/AsTree/Json/UserFolders/ScreensFromDisplayJson/SubTableInfo/Toggles";
    let jFetchObject = {
        method: "PATCH",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            folderName: jVarLocalFolderName,
            FileName: jVarLocalfilename,
            ItemName: jVarLocalitemname,
            ScreenName: jVarLocalscreenname,
            GridName: jVarLocalGridName,
            BodyAsJson
        })
    }
    let response = await fetch(jFetchUrl, jFetchObject);

    switch (response.status) {
        case 200:
            //window.location = "";
            let jVarLocalNewLocation = "";
            jVarLocalNewLocation += `?inFolderName=${jVarLocalFolderName}`
            jVarLocalNewLocation += `&inFileName=${jVarLocalfilename}`
            jVarLocalNewLocation += `&inItemName=${jVarLocalitemname}`
            jVarLocalNewLocation += `&inScreenName=${jVarLocalscreenname}`;
            jVarLocalNewLocation += `&inGridName=${jVarLocalGridName}`;
             window.location = jVarLocalNewLocation;

            break;

        case 204:
            Swal.fire('Not Update Data')
            break;
        default:
        // code block
    };

    console.log("response : ", response.status);
};

export { jFUpdateFunc };