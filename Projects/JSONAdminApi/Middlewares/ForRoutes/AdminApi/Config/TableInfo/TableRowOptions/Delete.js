let dal = require("../../../../../Dal/AdminApi/Config/TableInfo/TableRowOptions/Delete");

exports.Update = async ({ inJsonConfig, inItemConfig, inObjectToUpdate, inDataPk }) => {
    return await dal.Update({ inJsonConfig, inItemConfig, inObjectToUpdate, inDataPk });
};