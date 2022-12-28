import { ReturnFromSave } from "./urlSearchParams.js";

let StartFunc = () => {

    if (ReturnFromSave().FromSave) {
        Swal.fire('Created successfully...');
    };
};

export { StartFunc };