let Dal = require("../../../../../../Dal/AdminApi/Utility/Json/Folder/ForTableInfo/FromKeys");

exports.ColumnReOrder = async ({ inUserPK }) => {
    return await Dal.ColumnReOrder({ inUserPK });
};

exports.MainKeys = async ({ inUserPK }) => {
    return await Dal.MainKeys({ inUserPK });
};

exports.Delete = async ({ inUserPK }) => {
    return await Dal.Delete({ inUserPK });
};