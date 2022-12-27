let dal = require("../../../../../Dal/AdminApi/Config/TableInfo/UpdateKeys/MainKeys");

exports.Update = async ({ inJsonConfig, inItemConfig, inObjectToUpdate, inDataPk }) => {
    return await dal.Update({ inJsonConfig, inItemConfig, inObjectToUpdate, inDataPk });
};