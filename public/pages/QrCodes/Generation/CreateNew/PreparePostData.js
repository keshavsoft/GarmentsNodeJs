let StartFunc = () => {
    let jVarLocalProductNameId = document.getElementById("ProductNameId");
    let jVarLocalProductAliasNameId = document.getElementById("ProductAliasNameId");
    let jVarLocalBarcodeId = document.getElementById("BarcodeId");
    let jVarLocalPrice1Id = document.getElementById("Price1Id");
    let jVarLocalPrice2Id = document.getElementById("Price2Id");

    let jVarLocalReturnData = {};
    jVarLocalReturnData.ProductName = jVarLocalProductNameId.value;
    jVarLocalReturnData.ProductAliasName = jVarLocalProductAliasNameId.value;

    jVarLocalReturnData.Barcode = jVarLocalBarcodeId.value;

    jVarLocalReturnData.CostPrice = jVarLocalPrice1Id.value;

    jVarLocalReturnData.SalePrice = jVarLocalPrice2Id.value;


    console.log("jVarLocalReturnData : ", jVarLocalReturnData);
    return jVarLocalReturnData;
};

export { StartFunc };