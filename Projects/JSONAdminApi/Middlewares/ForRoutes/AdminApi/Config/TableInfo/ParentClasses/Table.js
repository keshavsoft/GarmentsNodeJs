let dal = require("../../../../../Dal/AdminApi/Config/TableInfo/ParentClasses/Table");

exports.Update = async ({ inJsonConfig, inItemConfig, inObjectToUpdate, inDataPk }) => {
    return await dal.Update({ inJsonConfig, inItemConfig, inObjectToUpdate, inDataPk });
};