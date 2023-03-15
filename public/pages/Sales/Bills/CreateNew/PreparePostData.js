let StartFunc = () => {
    let jVarLocalSupplierNameSelectId = "SupplierNameSelectId"
    let jVarLocalHtmlSupplierNameSelectId = document.getElementById(jVarLocalSupplierNameSelectId);
    let jVarLocalBillNumberId = document.getElementById("BillNumberId");
    let jVarLocalDateId = document.getElementById("DateId");
    let jVarLocalReturnData = {};
 
    if ((jVarLocalHtmlSupplierNameSelectId === null) === false) {
        let jVarLocalSupplierName = jVarLocalHtmlSupplierNameSelectId.name;
        jVarLocalReturnData[jVarLocalSupplierName] = jVarLocalHtmlSupplierNameSelectId.value;
    };

    jVarLocalReturnData.BillNumber = jVarLocalBillNumberId.value;
    jVarLocalReturnData.Date = jVarLocalDateId.value;

    return jVarLocalReturnData;
};

export { StartFunc };