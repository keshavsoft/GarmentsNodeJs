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

    let jVarLocalColsestTr = jVarLocalCurrentTarget.closest("tr");
    let jVarLocalDataAttribute = jVarLocalColsestTr.querySelector('[name="DataAttribute"]');
    let jVarLocalDisplayName = jVarLocalColsestTr.querySelector('[name="DisplayName"]');
    let jVarLocalShowInTable = jVarLocalColsestTr.querySelector('[name="ShowInTable"]');
    let jVarLocalInsert = jVarLocalColsestTr.querySelector('[name="Insert"]');
    let jVarLocalCreateNew = jVarLocalColsestTr.querySelector('[name="CreateNew"]');
    let jVarLocalIsTextArea = jVarLocalColsestTr.querySelector('[name="IsTextArea"]');
    let jVarLocalShowTotal = jVarLocalColsestTr.querySelector('[name="ShowTotal"]');
    console.log("jVarLocalShowTotal : ", jVarLocalShowTotal);
    let jVarLocalDataAttributeValue = jVarLocalDataAttribute.value;
    let jVarLocalDisplayNameValue = jVarLocalDisplayName.value;
    let jVarLocalShowInTableValue = jVarLocalShowInTable.checked
    let jVarLocalInsertValue = jVarLocalInsert.checked
    let jVarLocalCreateNewValue = jVarLocalCreateNew.checked
    let jVarLocalIsTextAreaValue = jVarLocalIsTextArea.checked
    let jVarLocalShowTotalValue = jVarLocalShowTotal.checked

    let BodyAsJson = {
        DisplayName: jVarLocalDisplayNameValue,
        ShowInTable: jVarLocalShowInTableValue,
        Insert: jVarLocalInsertValue,
        CreateNew: jVarLocalCreateNewValue,
        IsTextArea: jVarLocalIsTextAreaValue,
        ShowTotal: jVarLocalShowTotalValue
    }

    let jFetchUrl = "/JSONAdminApi/AdminApi/AsTree/Json/UserFolders/ScreensFromDisplayJson/TableColumns/Toggles";


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
            DataAttribute: jVarLocalDataAttributeValue,
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
            jVarLocalNewLocation += `&inColumnName=${jVarLocalDataAttributeValue}`;
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