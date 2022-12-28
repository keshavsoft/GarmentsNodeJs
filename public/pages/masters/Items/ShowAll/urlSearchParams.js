let ReturnRowPK = () => {
    let jVarLocalSearch = document.location.search;
    const params = new URLSearchParams(jVarLocalSearch);
    const RowPK = params.get("RowPK");

    return { RowPK };
};

let ReturnFromSave = () => {
    let jVarLocalSearch = document.location.search;
    const params = new URLSearchParams(jVarLocalSearch);
    const FromSave = params.get("FromSave");

    return { FromSave };
};

let ReturnFromDelete = () => {
    let jVarLocalSearch = document.location.search;
    const params = new URLSearchParams(jVarLocalSearch);
    const FromDelete = params.get("FromDelete");
    const RowPK = params.get("RowPK");

    return { FromDelete, RowPK };
};

export { ReturnRowPK, ReturnFromSave, ReturnFromDelete }
