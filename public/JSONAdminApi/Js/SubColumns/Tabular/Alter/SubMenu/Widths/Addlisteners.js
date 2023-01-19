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

    // <button type="button" class="btn btn-outline-info UpdateButtonClass" data-foldername="{{@../../../../../key}}"
    //  data-filename="{{@../../../../key}}" data-itemname="{{@../../../key}}"
    //   data-screenname="{{@../../key}}" data-subtablecolumnkey={{@../key}}
    //   data-tablecolumnkey={{@key}}>
    //     Update
    // </button>


    let jVarLocalColsestTr = jVarLocalCurrentTarget.closest("tr");
    let jVarLocalDataAttribute = jVarLocalColsestTr.querySelector('[name="DataAttribute"]');
    let jVarLocalWidths = jVarLocalColsestTr.querySelector('[name="px"]');

    let jVarLocalDataAttributeValue = jVarLocalDataAttribute.value;
    let jVarLocalWidthsValue = jVarLocalWidths.value;

    let BodyAsJson = {
        px: jVarLocalWidthsValue
    }

    let jFetchUrl = "/JSONAdminApi/AdminApi/AsTree/Json/UserFolders/ScreensFromDisplayJson/SubTableColumns/SubKeys/Widths";

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
            subtablecolumnkey: jVarLocalsubtablecolumnkey,
            tablecolumnkey: jVarLocaltablecolumnkey,
            BodyAsJson
        })
    });

    switch (response.status) {
        case 200:
            //window.location = "";
            // let jVarLocalNewLocation = "";
            // jVarLocalNewLocation += `?inFolderName=${jVarLocalFolderName}`
            // jVarLocalNewLocation += `&inFileName=${jVarLocalfilename}`
            // jVarLocalNewLocation += `&inItemName=${jVarLocalitemname}`
            // jVarLocalNewLocation += `&inScreenName=${jVarLocalscreenname}`
            // jVarLocalNewLocation += `&inColumnName=${jVarLocalDataAttributeValue}`;
            // console.log("jVarLocalNewLocation : ", jVarLocalNewLocation);
            // window.location = jVarLocalNewLocation;

            let jVarLocalNewLocation = "";
            jVarLocalNewLocation += `?inFolderName=${jVarLocalFolderName}`
            jVarLocalNewLocation += `&inFileName=${jVarLocalfilename}`
            jVarLocalNewLocation += `&inItemName=${jVarLocalitemname}`
            jVarLocalNewLocation += `&inScreenName=${jVarLocalscreenname}`
            jVarLocalNewLocation += `&subtablecolumnkey=${jVarLocalsubtablecolumnkey}`;
            jVarLocalNewLocation += `&inColumnName=${jVarLocalDataAttributeValue}`;
            console.log("jVarLocalNewLocation : ", jVarLocalNewLocation);
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