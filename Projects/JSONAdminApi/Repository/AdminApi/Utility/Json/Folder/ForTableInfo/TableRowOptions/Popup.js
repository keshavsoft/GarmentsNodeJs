let Dal = require("../../../../../../../Dal/AdminApi/Utility/Json/Folder/ForTableInfo/TableRowOptions/Popup");

exports.Popup = async ({ inUserPK }) => {
    return await Dal.Popup({ inUserPK });
};