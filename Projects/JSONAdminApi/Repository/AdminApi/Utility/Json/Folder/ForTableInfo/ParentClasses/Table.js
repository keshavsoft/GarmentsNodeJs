let Dal = require("../../../../../../../Dal/AdminApi/Utility/Json/Folder/ForTableInfo/ParentClasses/Table");

exports.Table = async ({ inUserPK }) => {
    return await Dal.Table({ inUserPK });
};