let dal = require("../../../../../Dal/AdminApi/Config/SubTableColumns/UpdateKeys/AllInOneWithValues");

exports.Update = async ({ inJsonConfig, inItemConfig, inObjectToUpdate, inQueryObject, inTableColumnName, inDataPk, callback }) => {
    return await dal.Update({ inJsonConfig, inItemConfig, inObjectToUpdate, inQueryObject, inTableColumnName, inDataPk, callback });
};
