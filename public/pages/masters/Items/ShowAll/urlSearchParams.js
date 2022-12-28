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

export { ReturnRowPK, ReturnFromSave }
