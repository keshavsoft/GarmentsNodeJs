let ReturnRowPK = () => {
    let jVarLocalSearch = document.location.search;
    const params = new URLSearchParams(jVarLocalSearch);
    const RowPK = params.get("RowPK");

    return { RowPK };
};

export { ReturnRowPK }
