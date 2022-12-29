let StartFunc = () => {
    let jVarLocalVoucherNameId = document.getElementById("VoucherNameId");
    let jVarLocalBillNumberId = document.getElementById("BillNumberId");
    let jVarLocalDateId = document.getElementById("DateId");


    let jVarLocalReturnData = {};
    jVarLocalReturnData.VoucherName = jVarLocalVoucherNameId.value;
    jVarLocalReturnData.BillNumber = jVarLocalBillNumberId.value;
    jVarLocalReturnData.Date = jVarLocalDateId.value;



    console.log("jVarLocalReturnData : ", jVarLocalReturnData);
    return jVarLocalReturnData;
};

export { StartFunc };