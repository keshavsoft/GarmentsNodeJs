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
    let jVarLocalParent1Class = jVarLocalColsestTr.querySelector('[name="Parent1Class"]');
    let jVarLocalParent2Class = jVarLocalColsestTr.querySelector('[name="Parent2Class"]');
    let jVarLocalParent3Class = jVarLocalColsestTr.querySelector('[name="Parent3Class"]');
    let jVarLocalInputClass = jVarLocalColsestTr.querySelector('[name="InputClass"]');

    let jVarLocaljVarLocalParent1ClassValue = jVarLocalParent1Class.value;
    let jVarLocaljVarLocalParent2ClassValue = jVarLocalParent2Class.value;
    let jVarLocaljVarLocalParent3ClassValue = jVarLocalParent3Class.value;
    let jVarLocaljVarLocalInputClassValue = jVarLocalInputClass.value;

    let BodyAsJson = {
        Parent1Class: jVarLocaljVarLocalParent1ClassValue,
        Parent2Class: jVarLocaljVarLocalParent2ClassValue,
        Parent3Class: jVarLocaljVarLocalParent3ClassValue,
        InputClass: jVarLocaljVarLocalInputClassValue
    }

    let jFetchUrl = "/JSONAdminApi/AdminApi/AsTree/Json/UserFolders/ScreensFromDisplayJson/SubTableColumns/SubKeys/ParentClasses";

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
            DataAttribute: jVarLocaltablecolumnkey,
            subtablecolumnkey: jVarLocalsubtablecolumnkey,
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