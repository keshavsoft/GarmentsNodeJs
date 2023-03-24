let StartFunc1 = async (event) => {
    let jVarLocalCurrentTarget = event.currentTarget;
    let jVarLocalvoucherName = jVarLocalCurrentTarget.dataset.report;
    let localReportConficObject;

    let localjVarGlobalPresentiveData = jVarGlobalPresentiveData;

    if (jVarLocalvoucherName in localjVarGlobalPresentiveData) {
        localReportConficObject = localjVarGlobalPresentiveData[jVarLocalvoucherName]

        let jFetchUrl = "/JSONAdminApi/AdminApi/Reports/ledgerAutoJsonFile/Utilities/import";
        let jVarLocalRequestHeader = {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ToName: jVarLocalvoucherName,
                ReportConficObject: localReportConficObject,
            })
        };

        let response = await fetch(jFetchUrl, jVarLocalRequestHeader);

        switch (response.status) {
            case 200:
                let jVarLocalNewLocation = `?inReportName=${jVarLocalvoucherName}`
                //   window.location = jVarLocalNewLocation;
                break;

            case 204:
                Swal.fire(`Cannot upload Report : ${jVarLocalvoucherName}`);
                break;
            default:
            // code block
        };
    };
};

let StartFunc = async (event) => {
    let jVarLocalCurrentTarget = event.currentTarget;
    let jVarLocalvoucherName = jVarLocalCurrentTarget.dataset.report;
    let localReportConficObject;

    let localjVarGlobalPresentiveData = jVarGlobalPresentiveData;

    if (jVarLocalvoucherName in localjVarGlobalPresentiveData) {
        localReportConficObject = localjVarGlobalPresentiveData[jVarLocalvoucherName]

        let responseStatus = await LocalFetchFunc({
            inBodyData: {
                ToName: jVarLocalvoucherName,
                ReportConficObject: localReportConficObject,
            }
        });

        await LocalPostFetch({
            inresponse: responseStatus,
            inCurrentTarget: jVarLocalCurrentTarget
        });
    };
};

let LocalPostFetch = async ({ inresponse, inCurrentTarget }) => {
    let responseStatus = inresponse.status;

    switch (responseStatus) {
        case 200:
            let jVarLocalClosestTr = inCurrentTarget.closest("tr");

            let data = await inresponse.json();

            if (data.KTF) {
                jVarLocalClosestTr.classList.add("table-success");
            } else {
                jVarLocalClosestTr.classList.add("table-danger");
                let jVarLocalShowStatusClass = jVarLocalClosestTr.querySelector(".ShowStatusClass");
                jVarLocalShowStatusClass.style.display = "";
            };
            break;

        case 204:

            Swal.fire(`Cannot upload Report : ${jVarLocalvoucherName}`);
            break;
        default:
        // code block
    };
};

let LocalFetchFunc = async ({ inBodyData }) => {
    let jFetchUrl = "/JSONAdminApi/AdminApi/Reports/ledgerAutoJsonFile/Utilities/import";
    let jVarLocalRequestHeader = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(inBodyData)
    };

    let response = await fetch(jFetchUrl, jVarLocalRequestHeader);

    return await response;
};


export { StartFunc };