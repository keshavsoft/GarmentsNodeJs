let dal = require("../../../../../Dal/AdminApi/Config/TableColumns/ServerSide/TransformBeforeSave");

exports.TransformBeforeSave =async ({ inJsonConfig, inItemConfig,inObjectToUpdate,inQueryObject,inTableColumnName,inDataPk }) => {
    await dal.TransformBeforeSave({ inJsonConfig, inItemConfig,inObjectToUpdate,inQueryObject,inTableColumnName,inDataPk });
};

exports.Update =async ({ inJsonConfig, inItemConfig,inObjectToUpdate,inQueryObject,inTableColumnName,inDataPk }) => {
    await dal.Update({ inJsonConfig, inItemConfig,inObjectToUpdate,inQueryObject,inTableColumnName,inDataPk });
};

