//import { StartFunc as PushDataStartFunc } from "./PushData/FetchFuncs.js";
import { StartFunc as DeleteFuncsStartFunc } from "../FetchFuncs/DeleteFuncs.js";

let StartFunc1 = async ({ inFolderName, inFileName, inItemName, inProjectName, inEvent }) => {
    let jVarLocalCurrentTarget = inEvent.currentTarget;
    let jVarLocalDataSet = jVarLocalCurrentTarget.dataset;
    let jVarLocalDataSetKeyNeeded = "rowpk";

    if (jVarLocalDataSetKeyNeeded in jVarLocalDataSet) {
        let jVarLocalRowPK = jVarLocalDataSet[jVarLocalDataSetKeyNeeded];

        let jVarLocalFromDelete = await DeleteFuncsStartFunc({
            inFolderName, inFileName, inItemName,
            inProjectName,
            inRowPK: jVarLocalRowPK
        });

        if (jVarLocalFromDelete.KTF) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Deleted",
                footer: '<a href="">Why do I have this issue?</a>'
            });

            window.location.reload();
        };
    };
};

let StartFunc = async ({ inFolderName, inFileName, inItemName, inProjectName, inEvent }) => {
    let jVarLocalCurrentTarget = inEvent.currentTarget;
    let jVarLocalDataSet = jVarLocalCurrentTarget.dataset;
    let jVarLocalDataSetKeyNeeded = "rowpk";

    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
        if (result.isConfirmed) {
            if (jVarLocalDataSetKeyNeeded in jVarLocalDataSet) {
                let jVarLocalRowPK = jVarLocalDataSet[jVarLocalDataSetKeyNeeded];

                let jVarLocalFromDelete = await DeleteFuncsStartFunc({
                    inFolderName, inFileName, inItemName,
                    inProjectName,
                    inRowPK: jVarLocalRowPK
                });

                if (jVarLocalFromDelete.KTF) {
                    window.location = `?FromDelete=true&RowPK=${jVarLocalRowPK}`;
                };
            };
        };
    });
};

export { StartFunc };