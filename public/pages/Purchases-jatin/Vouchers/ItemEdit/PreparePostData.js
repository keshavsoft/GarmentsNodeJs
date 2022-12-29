let StartFunc = () => {
    let jVarLocalSupplierNameId = document.getElementById("SupplierNameId");
    let jVarLocalCityId = document.getElementById("CityId");

    let jVarLocalReturnData = {};
    jVarLocalReturnData.SupplierName = jVarLocalSupplierNameId.value;
    jVarLocalReturnData.City = jVarLocalCityId.value;
    
    return jVarLocalReturnData;
};

export { StartFunc };