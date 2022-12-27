let dal = require("../../../../../Dal/AdminApi/Config/SubTableColumns/UpdateKeys/DataAttributes");

exports.Update = async ({ inJsonConfig, inItemConfig, inObjectToUpdate, inQueryObject, inTableColumnName, inDataPk }) => {
    return await dal.Update({ inJsonConfig, inItemConfig, inObjectToUpdate, inQueryObject, inTableColumnName, inDataPk });
};
