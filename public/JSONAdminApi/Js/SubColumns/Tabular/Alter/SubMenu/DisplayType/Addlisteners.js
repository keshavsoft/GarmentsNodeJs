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
    let jVarLocalIsIndianFormat = jVarLocalColsestTr.querySelector('[name="IsIndianFormat"]');
    let jVarLocalIsInput = jVarLocalColsestTr.querySelector('[name="IsInput"]');

    let jVarLocaljVarLocalIsIndianFormatValue = jVarLocalIsIndianFormat.checked;
    let jVarLocaljVarLocalIsInputValue = jVarLocalIsInput.checked;

    let BodyAsJson = {
        IsIndianFormat: jVarLocaljVarLocalIsIndianFormatValue,
        IsInput: jVarLocaljVarLocalIsInputValue
    }

    let jFetchUrl = "/JSONAdminApi/AdminApi/AsTree/Json/UserFolders/ScreensFromDisplayJson/SubTableColumns/SubKeys/DisplayType";

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
            subtablecolumnkey: jVarLocalsubtablecolumnkey,
            DataAttribute: jVarLocaltablecolumnkey,
            BodyAsJson
        })
    });

    switch (response.status) {
        case 200:
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