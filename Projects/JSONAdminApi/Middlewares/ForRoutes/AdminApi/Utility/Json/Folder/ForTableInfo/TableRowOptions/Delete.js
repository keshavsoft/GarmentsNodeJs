let Dal = require("../../../../../../../Dal/AdminApi/Utility/Json/Folder/ForTableInfo/TableRowOptions/Delete");

exports.Delete = async ({ inUserPK }) => {
    return await Dal.Delete({ inUserPK });
};