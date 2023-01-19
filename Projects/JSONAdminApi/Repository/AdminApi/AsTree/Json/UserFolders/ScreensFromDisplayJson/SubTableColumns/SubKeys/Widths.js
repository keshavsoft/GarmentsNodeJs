let Dal = require("../../../../../../../../Dal/AdminApi/AsTree/Json/UserFolders/ScreensFromDisplayJson/SubTableColumns/SubKeys/Widths");

let GetFuncs = async ({ DataPK }) => {
    let LocalinDataPk = DataPK;
    if (LocalinDataPk > 0) {
        return await Dal.GetFuncs({ DataPK });
    }
};

let Update = async ({ DataPK, folderName, FileName, ItemName, ScreenName, subtablecolumnkey, tablecolumnkey, DataAttribute, BodyAsJson }) => {
    let LocalinDataPk = DataPK;
    if (LocalinDataPk > 0) {
        return await Dal.Update({ DataPK, folderName, FileName, ItemName, ScreenName, subtablecolumnkey, tablecolumnkey, DataAttribute, BodyAsJson });
    }
};

module.exports = { GetFuncs, Update };