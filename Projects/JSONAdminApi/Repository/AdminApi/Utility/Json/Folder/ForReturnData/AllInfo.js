let Dal = require("../../../../../../Dal/AdminApi/Utility/Json/Folder/ForReturnData/AllInfo");

exports.FromTable = async ({ inUserPK }) => {
    return await Dal.FromTable({ inUserPK });
};

exports.FromVertical = async ({ inUserPK }) => {
    return await Dal.FromVertical({ inUserPK });
};

exports.FromSubTable = async ({ inUserPK }) => {
    return await Dal.FromSubTable({ inUserPK });
};