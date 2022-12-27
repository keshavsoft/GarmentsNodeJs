let dal = require("../../../../../../Dal/AdminApi/Config/SubTableColumns/TableInfo/ParentClasses/Table");

exports.Update = async ({ inJsonConfig, inItemConfig, inObjectToUpdate, inDataPk }) => {
    return await dal.Update({ inJsonConfig, inItemConfig, inObjectToUpdate, inDataPk });
};