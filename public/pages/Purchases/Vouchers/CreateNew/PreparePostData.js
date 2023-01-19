let StartFunc = () => {
    let jVarLocalVoucherNameId = document.getElementById("VoucherNameId");
    let jVarLocalBillNumberId = document.getElementById("BillNumberId");
    let jVarLocalDateId = document.getElementById("DateId");
    console.log("jVarLocalVoucherNameId : ", jVarLocalVoucherNameId);
    let jVarLocalReturnData = {};

    if ((jVarLocalVoucherNameId === null) === false) {
        jVarLocalReturnData.VoucherName = jVarLocalVoucherNameId.value;
    };

    jVarLocalReturnData.BillNumber = jVarLocalBillNumberId.value;
    jVarLocalReturnData.Date = jVarLocalDateId.value;

    return jVarLocalReturnData;
};

export { StartFunc };