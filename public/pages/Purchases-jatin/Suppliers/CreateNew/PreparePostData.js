let StartFunc = () => {
    let jVarLocalSupplierNameId = document.getElementById("SupplierNameId");
    let jVarLocalCityId = document.getElementById("CityId");
    let jVarLocalGSTId = document.getElementById("GSTId");
    let jVarLocalPhoneId= document.getElementById("PhoneId");
    

    let jVarLocalReturnData = {};
    jVarLocalReturnData.SupplierName = jVarLocalSupplierNameId.value;
    jVarLocalReturnData.City = jVarLocalCityId.value;
    jVarLocalReturnData.GST = jVarLocalGSTId.value;
    jVarLocalReturnData.Phone = jVarLocalPhoneId.value;


    console.log("jVarLocalReturnData : ", jVarLocalReturnData);
    return jVarLocalReturnData;
};

export { StartFunc };