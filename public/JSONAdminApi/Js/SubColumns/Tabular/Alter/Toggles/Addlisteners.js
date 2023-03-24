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
    let jVarLocalsubtablecolumnkey = jVarLocalCurrentTarget.dataset.subtablecolumnkey;
    let jVarLocaltablecolumnkey = jVarLocalCurrentTarget.dataset.tablecolumnkey;

    let jVarLocalColsestTr = jVarLocalCurrentTarget.closest("tr");
    let jVarLocalDisplayName = jVarLocalColsestTr.querySelector('[name="DisplayName"]');
    let jVarLocalShowInTable = jVarLocalColsestTr.querySelector('[name="ShowInTable"]');
    let jVarLocalInsert = jVarLocalColsestTr.querySelector('[name="Insert"]');
    let jVarLocalCreateNew = jVarLocalColsestTr.querySelector('[name="CreateNew"]');
    let jVarLocalIsTextArea = jVarLocalColsestTr.querySelector('[name="IsTextArea"]');

    let jVarLocalDisplayNameValue = jVarLocalDisplayName.value;
    let jVarLocalShowInTableValue = jVarLocalShowInTable.checked
    let jVarLocalInsertValue = jVarLocalInsert.checked
    let jVarLocalCreateNewValue = jVarLocalCreateNew.checked
    let jVarLocalIsTextAreaValue = jVarLocalIsTextArea.checked

    let BodyAsJson = {
        DisplayName: jVarLocalDisplayNameValue,
        ShowInTable: jVarLocalShowInTableValue,
        Insert: jVarLocalInsertValue,
        CreateNew: jVarLocalCreateNewValue,
        IsTextArea: jVarLocalIsTextAreaValue
    }

    let jFetchUrl = "/JSONAdminApi/AdminApi/AsTree/Json/UserFolders/ScreensFromDisplayJson/SubTableColumns/Toggles";


    let response = await fetch(jFetchUrl, {
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
            subtablecolumnkey:jVarLocalsubtablecolumnkey,
            DataAttribute: jVarLocaltablecolumnkey,
            BodyAsJson
        })
    });

    switch (response.status) {
        case 200:
            //window.location = "";
            let jVarLocalNewLocation = "";
            jVarLocalNewLocation += `?inFolderName=${jVarLocalFolderName}`
            jVarLocalNewLocation += `&inFileName=${jVarLocalfilename}`
            jVarLocalNewLocation += `&inItemName=${jVarLocalitemname}`
            jVarLocalNewLocation += `&inScreenName=${jVarLocalscreenname}`
            jVarLocalNewLocation += `&subtablecolumnkey=${jVarLocalsubtablecolumnkey}`;
            jVarLocalNewLocation += `&inColumnName=${jVarLocaltablecolumnkey}`;
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