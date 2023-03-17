let StartFunc = () => {
    let jVarLocalProductNameId = document.getElementById("ItemsDataListId");
    let jVarLocalProductAliasNameId = document.getElementById("ProductAliasNameId");
    let jVarLocalBarcodeId = document.getElementById("BarcodeId");
    let jVarLocalPrice1Id = document.getElementById("Price1Id");
    let jVarLocalPrice2Id = document.getElementById("Price2Id");
    let jVarLocalPecentagePrice = document.getElementById("PecentagePrice");
    let jVarLocaleditDeschiption = document.getElementById("edit-deschiption").querySelector("p");

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
        jVarLocalReturnData.PercentageValueAddition = parseInt(jVarLocalPecentagePrice.value);
    };

    if (jVarLocaleditDeschiption !== null) {
        jVarLocalReturnData.UserDescription = jVarLocaleditDeschiption.innerHTML;
    };

    jVarLocalSupplierNameFunc({ inData: jVarLocalReturnData });
    jVarLocalBillNumber({ inData: jVarLocalReturnData });
    jVarLocalCommonPrepareObject({
        inData: jVarLocalReturnData,
        inIdName: "DateId"
    });

    return jVarLocalReturnData;
};

let jVarLocalSupplierNameFunc = ({ inData }) => {
    let jVarLocalSupplierNameSelectId = "SupplierNameSelectId"
    let jVarLocalHtmlSupplierNameSelectId = document.getElementById(jVarLocalSupplierNameSelectId);

    if ((jVarLocalHtmlSupplierNameSelectId === null) === false) {
        let jVarLocalSupplierName = jVarLocalHtmlSupplierNameSelectId.name;
        inData[jVarLocalSupplierName] = jVarLocalHtmlSupplierNameSelectId.value;
    };
};

let jVarLocalBillNumber = ({ inData }) => {
    let jVarLocalSupplierNameSelectId = "BillNumberId"
    let jVarLocalHtmlSupplierNameSelectId = document.getElementById(jVarLocalSupplierNameSelectId);

    if ((jVarLocalHtmlSupplierNameSelectId === null) === false) {
        let jVarLocalSupplierName = jVarLocalHtmlSupplierNameSelectId.name;
        inData[jVarLocalSupplierName] = jVarLocalHtmlSupplierNameSelectId.value;
    };
};

let jVarLocalCommonPrepareObject = ({ inData, inIdName }) => {
    let jVarLocalSupplierNameSelectId = inIdName;
    let jVarLocalHtmlSupplierNameSelectId = document.getElementById(jVarLocalSupplierNameSelectId);

    if ((jVarLocalHtmlSupplierNameSelectId === null) === false) {
        let jVarLocalSupplierName = jVarLocalHtmlSupplierNameSelectId.name;
        inData[jVarLocalSupplierName] = jVarLocalHtmlSupplierNameSelectId.value;
    };
};

export { StartFunc };