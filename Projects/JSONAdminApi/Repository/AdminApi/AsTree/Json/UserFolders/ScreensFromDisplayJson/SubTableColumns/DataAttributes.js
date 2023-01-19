let Dal = require("../../../../../../../Dal/AdminApi/AsTree/Json/UserFolders/ScreensFromDisplayJson/SubTableColumns/DataAttributes");

let GetFuncs = async ({ DataPK }) => {
    return await Dal.GetFuncs({ DataPK });
};

let Update = async ({ DataPK, FolderName, FileName, ItemName, ScreenName, DataAttribute, BodyAsJson }) => {
    let LocalinDataPk = DataPK;
    if (LocalinDataPk > 0) {
        return await Dal.Update({ DataPK, FolderName, FileName, ItemName, ScreenName, DataAttribute, BodyAsJson });
    }
};

module.exports = { GetFuncs, Update }
