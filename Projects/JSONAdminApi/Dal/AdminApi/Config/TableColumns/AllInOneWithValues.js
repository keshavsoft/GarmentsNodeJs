let CommonDataSupply = require("../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ConfigFolder/UserFolder/UserFileAsFolder/DisplayJsonFile/ItemName/ScreenName/TableColumns/SubKeys/Update");

exports.Update = async ({ DataPK, folderName, FileName, ItemName, ScreenName, DataAttribute, BodyAsJson }) => {
    let LocalDataPk = DataPK;

    if (LocalDataPk > 0) {
        return await CommonDataSupply.AllInOneWithValuesUpdateKeys({ DataPK, folderName, FileName, ItemName, ScreenName, DataAttribute, BodyAsJson })
    };
};