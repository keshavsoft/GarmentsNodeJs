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
    let jVarLocalDefaultValue = jVarLocalColsestTr.querySelector('[name="DefaultValue"]');
    let jVarLocalTextAlign = jVarLocalColsestTr.querySelector('[name="TextAlign"]');
    

    let jVarLocalDataAttributeValue = jVarLocalDataAttribute.value;
    let jVarLocalDefaultValueValue = jVarLocalDefaultValue.value;
    let jVarLocalTextAlignValue = jVarLocalTextAlign.value;

    let BodyAsJson = {
        DefaultValue: jVarLocalDefaultValueValue,
        TextAlign: jVarLocalTextAlignValue
    }

    // let jFetchUrl = "/JSONAdminApi/AdminApi/Config/TableColumns/AllInOneWithValues";
    let jFetchUrl = "/JSONAdminApi/AdminApi/AsTree/Json/UserFolders/ScreensFromDisplayJson/TableColumns/AllInOneWithValues";

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
            let jVarLocalNewLocation = "";
            jVarLocalNewLocation += `?inFolderName=${jVarLocalFolderName}`
            jVarLocalNewLocation += `&inFileName=${jVarLocalfilename}`
            jVarLocalNewLocation += `&inItemName=${jVarLocalitemname}`
            jVarLocalNewLocation += `&inScreenName=${jVarLocalscreenname}`
            jVarLocalNewLocation += `&inColumnName=${jVarLocalDataAttributeValue}`;
            console.log("jVarLocalNewLocation : ", jVarLocalNewLocation);
            window.location = jVarLocalNewLocation;
            break;
        case 204:
            Swal.fire('Not Update Data')
            break;
        default:
        // code block
    }

    console.log("response : ", response.status);


}




export { jFUpdateFunc };