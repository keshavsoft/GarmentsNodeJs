let StartFunc = () => {
    let jVarLocalProductNameId = document.getElementById("ItemsDataListId");
    let jVarLocalProductAliasNameId = document.getElementById("ProductAliasNameId");
    let jVarLocalBarcodeId = document.getElementById("BarcodeId");
    let jVarLocalPrice1Id = document.getElementById("Price1Id");
    let jVarLocalPrice2Id = document.getElementById("Price2Id");
    let jVarLocalPecentagePrice = document.getElementById("PecentagePrice");


    let jVarLocalReturnData = {};

    if (jVarLocalProductNameId !== null) {
        jVarLocalReturnData.ProductName = jVarLocalProductNameId.value;
    };

    if (jVarLocalProductAliasNameId !== null) {
        jVarLocalReturnData.ProductAliasName = jVarLocalProductAliasNameId.value;
    };

    if (jVarLocalBarcodeId !== null) {
        jVarLocalReturnData.Barcode = jVarLocalBarcodeId.value;
    };

    if (jVarLocalPrice1Id !== null) {
        jVarLocalReturnData.CostPrice = parseInt(jVarLocalPrice1Id.value);
    };

    if (jVarLocalPrice2Id !== null) {
        jVarLocalReturnData.SalePrice = parseInt(jVarLocalPrice2Id.value);
    };
    if (jVarLocalPecentagePrice !== null) {
        jVarLocalReturnData.Persentage = parseInt(jVarLocalPecentagePrice.value);
    };

    return jVarLocalReturnData;
};

export { StartFunc };