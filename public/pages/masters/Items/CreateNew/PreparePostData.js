let StartFunc = () => {
    let jVarLocalItemNameId = document.getElementById("ItemNameId");

    let jVarLocalReturnData = {
        ItemName: jVarLocalItemNameId.value
    };
    console.log("jVarLocalReturnData : ", jVarLocalReturnData);
    return jVarLocalReturnData;
};

export { StartFunc };