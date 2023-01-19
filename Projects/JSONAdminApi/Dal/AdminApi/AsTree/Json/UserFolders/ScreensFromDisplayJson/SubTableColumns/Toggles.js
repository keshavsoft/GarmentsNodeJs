let CommonDatasupply = require("../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ConfigFolder/AsTree/ForSubTableColumns/Toggles");
let CommonDataSupplyForUpdate = require("../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ConfigFolder/UserFolder/UserFileAsFolder/DisplayJsonFile/ItemName/ScreenName/SubTableColumns/Toggles/Update")

let GetFuncs = async ({ DataPK }) => {
    if (DataPK > 0) {
        return await CommonDatasupply.AsObject({ inDataPK: DataPK });
    };
};

let Update = async ({ DataPK, FolderName, FileName, ItemName, ScreenName, subtablecolumnkey, DataAttribute, BodyAsJson }) => {
    let LocalDataPk = DataPK;

    if (LocalDataPk > 0) {
        return await CommonDataSupplyForUpdate.Update({ DataPK, FolderName, FileName, ItemName, ScreenName, subtablecolumnkey, DataAttribute, BodyAsJson })
    };
};

module.exports = {
    GetFuncs, Update
};
