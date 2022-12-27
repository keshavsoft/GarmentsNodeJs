let StartFunc = () => {
    let jVarLocalItemNameId = document.getElementById("ItemNameId");
    let jVarLocalGSTId = document.getElementById("GSTId");

    let jVarLocalReturnData = {};
    jVarLocalReturnData.ItemName = jVarLocalItemNameId.value;
    jVarLocalReturnData.GST = jVarLocalGSTId.value;


    console.log("jVarLocalReturnData : ", jVarLocalReturnData);
    return jVarLocalReturnData;
};

export { StartFunc };