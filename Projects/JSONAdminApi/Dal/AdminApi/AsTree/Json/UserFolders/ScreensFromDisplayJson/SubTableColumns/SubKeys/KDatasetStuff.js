let CommonDataSupplyForGet = require("../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ConfigFolder/AsTree/ForSubTableColumns/SubMenu/KDatasetStuff");
let CommonDataSupply = require("../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ConfigFolder/UserFolder/UserFileAsFolder/DisplayJsonFile/ItemName/ScreenName/SubTableColumns/SubMenu/KDatasetStuff/Update");

exports.GetFuncs = async ({ DataPK }) => {
     let LocalinDataPk = DataPK;
    
    if (LocalinDataPk > 0) {
        return await CommonDataSupplyForGet.AsObject({ inDataPK: LocalinDataPk });
    }
};

exports.Update = async ({ DataPK, folderName, FileName, ItemName, ScreenName, DataAttribute, BodyAsJson }) => {
    let LocalinDataPk = DataPK;
    if (LocalinDataPk > 0) {
        return await CommonDataSupply.Update({ DataPK, folderName, FileName, ItemName, ScreenName, DataAttribute, BodyAsJson });
    }
};