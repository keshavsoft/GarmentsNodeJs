let Dal = require("../../../../Dal/AdminApi/Config/TableColumns/AllInOneWithValues");

exports.Update = async ({ DataPK, folderName, FileName, ItemName, ScreenName, DataAttribute, BodyAsJson }) => {
    return await Dal.Update({ DataPK, folderName, FileName, ItemName, ScreenName, DataAttribute, BodyAsJson })
};