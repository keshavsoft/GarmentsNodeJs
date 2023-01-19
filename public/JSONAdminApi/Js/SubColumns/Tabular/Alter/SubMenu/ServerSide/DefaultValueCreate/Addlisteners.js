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
    let jVarLocalControlType = jVarLocalColsestTr.querySelector('[name="ControlType"]');
    let jVarLocalIncrementBy = jVarLocalColsestTr.querySelector('[name="IncrementBy"]');
    let jVarLocalType = jVarLocalColsestTr.querySelector('[name="Type"]');
    let jVarLocalStartValue = jVarLocalColsestTr.querySelector('[name="StartValue"]');
    let jVarLocalConsiderFirmPeriod = jVarLocalColsestTr.querySelector('[name="ConsiderFirmPeriod"]');

    let jVarLocalDataAttributeValue = jVarLocalDataAttribute.value;
    let jVarLocalControlTypeValue = jVarLocalControlType.value;
    let jVarLocalIncrementByValue = jVarLocalIncrementBy.value;
    let jVarLocalTypeValue = jVarLocalType.value;
    let jVarLocalStartValueValue = jVarLocalStartValue.value;
    let jVarLocalTransformValue = jVarLocalConsiderFirmPeriod.checked;

    let BodyAsJson = {
        ControlType: jVarLocalControlTypeValue,
        IncrementBy:jVarLocalIncrementByValue,
        Type: jVarLocalTypeValue,
        StartValue:jVarLocalStartValueValue,
        ConsiderFirmPeriod:jVarLocalTransformValue
    }

    let jFetchUrl = "/JSONAdminApi/AdminApi/AsTree/Json/UserFolders/ScreensFromDisplayJson/SubsTableColumns/SubKeys/ServerSide/DefaultValueCreate";

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