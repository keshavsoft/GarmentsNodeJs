let Dal = require("../../../../../../../Dal/AdminApi/AsTree/Json/UserFolders/ScreensFromDisplayJson/SubTableColumns/Toggles");

exports.GetFuncs = async ({ DataPK }) => {
    return await Dal.GetFuncs({ DataPK });
};

exports.Update = async ({ DataPK, FolderName, FileName, ItemName, ScreenName, subtablecolumnkey, DataAttribute, BodyAsJson }) => {
    return await Dal.Update({ DataPK, FolderName, FileName, ItemName, ScreenName, subtablecolumnkey, DataAttribute, BodyAsJson })
};
