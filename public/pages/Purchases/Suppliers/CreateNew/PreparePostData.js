let StartFunc = () => {
    let jVarLocalSupplierNameId = document.getElementById("SupplierNameId");
    let jVarLocalCityId = document.getElementById("CityId");
    let jVarLocalGSTId = document.getElementById("GSTId");
    let jVarLocalPhoneId = document.getElementById("PhoneId");
    let jVarLocalStatusId = document.getElementById("StatusId");
    let jVarLocalIdId = document.getElementById("IdId");



    let jVarLocalReturnData = {};
    jVarLocalReturnData.SupplierName = jVarLocalSupplierNameId.value;
    jVarLocalReturnData.City = jVarLocalCityId.value;
    jVarLocalReturnData.GST = jVarLocalGSTId.value;
    jVarLocalReturnData.Phone = jVarLocalPhoneId.value;
    jVarLocalReturnData.Status = jVarLocalStatusId.value;
    jVarLocalReturnData.Id = jVarLocalIdId.value;



    console.log("jVarLocalReturnData : ", jVarLocalReturnData);
    return jVarLocalReturnData;
};

export { StartFunc };